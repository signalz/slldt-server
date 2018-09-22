import passport from 'passport';
import Strategy from 'passport-local';
import jwt from 'jsonwebtoken';
import passportJWT from 'passport-jwt';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const user = {
  id: 666,
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
  secretOrKey: 'server secret',
},
(jwtPayload, next) => {
  if (jwtPayload.id === 666) {
    return next(null, user);
  }

  return next();
}));

export const generateToken = (req, res, next) => {
  req.token = jwt.sign({
    id: req.user.id,
  }, 'server secret', {
    expiresIn: '2d',
  });
  next();
};

export default passport;
