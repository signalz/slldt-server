import sequelize from 'sequelize';
import config from './config';
const db = config.database;
const database = new sequelize(db.schema, db.user, db.password, {
  host: db.host,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = database;