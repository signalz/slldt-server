import Sequelize from 'sequelize';
import { databaseConfig } from '../config';
import models from '../model';

const {
  schema,
  user,
  password,
  host,
} = databaseConfig;

const sequelize = new Sequelize(schema, user, password, {
  host,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};

// binding models to db
const keys = Object.keys(models);
// init db
keys.forEach((key) => {
  const model = sequelize.import(key, models[key]);
  db[key] = model;
});
// associate db
keys.forEach((key) => {
  if (db[key].associate) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
