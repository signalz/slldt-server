import passport from 'passport';
import Strategy from 'passport-local';
import jwt from 'jsonwebtoken';
import passportJWT from 'passport-jwt';
import Sequelize from 'sequelize';
import HttpStatus from 'http-status-codes';

import { SERVER_KEY, TOKEN_EXPIRES } from '../config';
import db from '../database';

const { Op } = Sequelize;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new Strategy(async (username, password, done) => {
  try {
    const user = await db.user.findOne({
      where: { userName: username },
      include: [{
        model: db.role,
        as: 'roles',
        attributes: [['role_id', 'roleId'], ['role_name', 'roleName']],
        through: {
          attributes: ['role_id'],
        },
      },
      ],
    });
    // user existed
    if (user.dataValues) {
      // compare password
      // console.log(user.validPassword(password));
      if (user.isPasswordMatched(password)) {
        done(null, user.dataValues);
      } else {
        done(null, false);
      }
    } else {
      done(null, false);
    }
  } catch (e) {
    console.log(e);
    done(null, false);
  }
}));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: SERVER_KEY,
}, async (jwtPayload, next) => {
  const { id, exp } = jwtPayload;
  try {
    const user = await db.user.findOne({
      where: { userId: id },
      include: [{
        model: db.role,
        as: 'roles',
        attributes: [['role_id', 'roleId'], ['role_name', 'roleName']],
        through: {
          attributes: ['role_id'],
        },
      },
      ],
    });

    if (user.dataValues) {
      // if token expires => user trying to access login-with-token
      if (exp * 1000 < new Date().getTime()) {
        return next(null, user.dataValues, { isExp: true });
      }

      return next(null, user.dataValues);
    }
  } catch (e) {
    console.log(e);
  }

  return next();
}));

export const generateToken = (req, res, next) => {
  req.token = jwt.sign({
    id: req.user.userId,
  }, SERVER_KEY, {
    expiresIn: TOKEN_EXPIRES,
  });
  next();
};

export const authorize = async (req, res, next) => {
  const { user, baseUrl, method } = req;
  const { roles } = user;
  const rolesIds = [];
  roles.forEach(role => rolesIds.push(role.UserRole.role_id));
  const functions = await db.role.findAll({
    where: {
      roleId: {
        [Op.in]: rolesIds,
      },
    },
    include: [{
      model: db.function,
      as: 'functions',
      attributes: ['method', 'path'],
      through: {
        attributes: ['role_id'],
      },
      where: {
        method,
        path: baseUrl,
      },
    }],
  });

  if (functions.length > 0) {
    next();
  } else {
    res.status(HttpStatus.FORBIDDEN).send({ message: 'Forbidden' });
  }
};

export default passport;
