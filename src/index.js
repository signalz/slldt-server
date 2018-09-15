import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './routes';
import sequelize from './database'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/users', routes.userRoutes());

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(5000, () => console.log('Example app listening on port 5000!'));
