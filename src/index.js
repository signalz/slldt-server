import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
// import createError from 'http-errors';
import cors from 'cors';

import routes from './routes';
import db from './database';
import authentication from './authentication';

const app = express();
const { passport, generateToken, authorize } = authentication;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('dev'));
app.use(passport.initialize());
// app.use((req, res, next) => {
//   // console.log(req, res);
//   next(createError(404, 'This page does not exist'));
// });

// login
app.use('/login', passport.authenticate(
  'local', {
    session: false,
  },
), generateToken, routes.authenticationRoutes());
// auto login with token
app.use('/login-with-token',
  passport.authenticate('jwt', { session: false, ignoreExpiration: true }),
  generateToken,
  routes.authenticationRoutes());

app.use('/users',
  passport.authenticate('jwt', { session: false }),
  authorize,
  routes.userRoutes());

app.use('/students',
  passport.authenticate('jwt', { session: false }),
  authorize,
  routes.studentRoutes());

db.sequelize.sync().then(() => {
  app.listen(5000, () => console.log('Example app listening on port 5000!'));
}).catch(err => console.log('Cannot connect to databse', err));
