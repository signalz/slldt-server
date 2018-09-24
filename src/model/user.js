import bcrypt from 'bcryptjs';
import { BCRYPT_SALT } from '../config';

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userName: {
      field: 'user_name',
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      field: 'password',
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      field: 'date_of_birth',
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
    mail: {
      field: 'mail',
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        msg: 'Invalid email',
      },
    },
    phone: {
      field: 'phone',
      type: DataTypes.STRING,
    },
    address: {
      field: 'address',
      type: DataTypes.STRING,
    },
    createdBy: {
      field: 'created_by',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdDate: {
      field: 'created_date',
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedBy: {
      field: 'updated_by',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updatedDate: {
      field: 'updated_date',
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    instanceMethods: {
      validPassword: password => bcrypt.compareSync(password, this.password),
    },
    tableName: 'user',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
    classMethods: {
      associate: (models) => {
        User.belongsToMany(models.role, { through: models.user_role });
      },
    },
  });

  function encryptPassword(user, options) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(user.password, BCRYPT_SALT, (err, data) => {
        if (err) reject(err);
        user.password = data;
        resolve();
      });
    });
  }

  User.beforeCreate(encryptPassword);
  User.beforeUpdate(encryptPassword);


  return User;
};

export default UserModel;
