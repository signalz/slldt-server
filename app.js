var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Start HieuTC add

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  (userName, password, done) => {
    findUser(userName, (err, user) => {
      if (err) {
        return done(err);
      }
      // User not found
      if (!user) {
        return done(null, false);
      }
      // Always use hashed passwords and fix time comparison
      bcrypt.compare(password, user.passwordHash, (err, isValid) => {
        if (err) {
          return done(err);
        }
        if (!isValid) {
          return done(null, false)
        }
        return done(null, user)
      })
    })

}));


const Sequelize = require('sequelize');
const sequelize = new Sequelize('SLLDT', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
const Class = require("./src/model/class");
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//   const Score = sequelize.define('Score', {
//     studentId: {
//         field: 'student_id',
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         allowNull: false
//     },
//     month: {
//         field: 'month',
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         allowNull: false
//     },
//     score: {
//         field: 'score',
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     link: {
//         field: 'link',
//         type: Sequelize.STRING
//     },
//     createdBy: {
//         field: 'created_by',
//         type: Sequelize.INTEGER,
//         allowNull: false
//     },
//     createdDate: {
//         field: 'created_date',
//         type: Sequelize.DATE,
//         allowNull: false
//     },
//     updatedBy: {
//         field: 'updated_by',
//         type: Sequelize.INTEGER,
//         allowNull: false
//     },
//     updatedDate: {
//         field: 'updated_date',
//         type: Sequelize.DATE,
//         allowNull: false
//     }

// }, {
//     tableName: 'score',
//     timestamps: false
// });

Class(sequelize).create({
  classId: 12,
  className: 'class01',
  createdBy: 1,
  updatedBy: 1
});

// const bodyParser = require('body-parser');
// const passport = require('passport');
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);
// app.use(session({
//   store: new RedisStore({
//     url: config.RedisStore.url
//   }),
//   secret: config.RedisStore.secret,
//   resave: false,
//   saveUninitialized: false
// }))

// app.get('/profile', passport.authenticationMiddleware(), renderProfile)

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); 
app.use(passport.initialize);
app.use(passport.session);

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true  
}));

// End HieuTC

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
