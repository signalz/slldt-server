import passport from 'passport';
import Strategy from 'passport-local';
import jwt from 'jsonwebtoken';
import passportJWT from 'passport-jwt';

import { SERVER_KEY, TOKEN_EXPIRES } from '../config';
import db from '../database';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new Strategy(async (username, password, done) => {
  try {
    const user = await db.user.findOne({
      where: { userName: username },
      include: [{
        model: db.role,
        attributes: ['role_id', 'role_name'],
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

export default passport;
