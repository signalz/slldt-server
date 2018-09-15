import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './routes';
import db from './database'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/users', routes.userRoutes());

// db.sequelize.s

db.sequelize.sync().then(() => {
  app.listen(5000, () => console.log('Example app listening on port 5000!'));
});
