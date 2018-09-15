const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // timestamps: 'false',
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    userName: {
      field: 'user_name',
      type: DataTypes.STRING,
      allowNull: false,
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
    },
    mail: {
      field: 'mail',
      type: DataTypes.STRING,
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
    tableName: 'user',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  return User;
};

export default UserModel;
