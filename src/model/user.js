import bcrypt from 'bcryptjs';
import { BCRYPT_SALT } from '../config';

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      field: 'id',
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      field: 'user_name',
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      len: {
        args: [0, 250],
        msg: 'User name too long',
      },
    },
    password: {
      field: 'password',
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      len: {
        args: [0, 250],
        msg: 'Name too long',
      },
    },
    studenId: {
      field: 'student_id',
      type: DataTypes.UUID,
    },
    roleId: {
      field: 'role_id',
      type: DataTypes.UUID,
      allowNull: false,
    },
    dateOfBirth: {
      field: 'date_of_birth',
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
      },
    },
    mail: {
      field: 'mail',
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 250],
          msg: 'Mail too long',
        },
        isEmail: {
          msg: 'Invalid email',
        },
      },
    },
    phone: {
      field: 'phone',
      type: DataTypes.STRING,
      len: {
        args: [0, 250],
        msg: 'Phone too long',
      },
    },
    address: {
      field: 'address',
      type: DataTypes.STRING,
      len: {
        args: [0, 250],
        msg: 'Address too long',
      },
    },
    createdBy: {
      field: 'created_by',
      type: DataTypes.UUID,
      allowNull: false,
    },
    createdDate: {
      field: 'created_date',
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedBy: {
      field: 'updated_by',
      type: DataTypes.UUID,
      allowNull: false,
    },
    updatedDate: {
      field: 'updated_date',
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'user',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });
  // Class Method
  User.associate = (models) => {
    User.hasOne(models.role, {
      as: 'roles',
    });
  };

  // Instance Method
  User.prototype.isPasswordMatched = function isPasswordMatched(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // hash password using bcrypt
  const encryptPassword = (plainText) => {
    const salt = bcrypt.genSaltSync(BCRYPT_SALT);
    const hash = bcrypt.hashSync(plainText.toString(), salt);
    return hash;
  };

  const beforeCreateHook = (user) => {
    try {
      // eslint-disable-next-line no-param-reassign
      user.password = encryptPassword(user.password);
    } catch (e) {
      throw new Error('Password cannot be encypted....');
    }
  };

  User.beforeCreate(beforeCreateHook);
  User.beforeUpdate(beforeCreateHook);


  return User;
};

export default UserModel;
