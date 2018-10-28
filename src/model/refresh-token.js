const RefreshTokenModel = (sequelize, DataTypes) => {
  const RefreshToken = sequelize.define('RefreshToken', {
    token: {
      field: 'token',
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    expiresAt: {
      field: 'expires_at',
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
    },
    createdBy: {
      field: 'created_by',
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdDate: {
      field: 'created_date',
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedBy: {
      field: 'updated_by',
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedDate: {
      field: 'updated_date',
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'refresh_token',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  return RefreshToken;
};

export default RefreshTokenModel;
