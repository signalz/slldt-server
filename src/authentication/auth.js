import passport from 'passport';
import Strategy from 'passport-local';
import jwt from 'jsonwebtoken';
import passportJWT from 'passport-jwt';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const SERVER_KEY = 'server secret';
const TOKEN_EXPIRES = '2d';

const user = {
  userId: 666,
  firstname: 'devils',
  lastname: 'name',
  email: 'devil@he.ll',
  verified: true,
};

passport.use(new Strategy((username, password, done) => {
  if (username === 'name' && password === '666') {
    done(null, user);
  } else {
    done(null, false);
  }
}));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: SERVER_KEY,
}, (jwtPayload, next) => {
  const { id, exp } = jwtPayload;
  // if token expires => user trying to access login-with-token
  if (exp * 1000 < new Date().getTime()) {
    return next(null, user, { isExp: true });
  }
  if (id === 666) {
    return next(null, user);
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
