const UserRoleModel = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    id: {
      field: 'id',
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    roleId: {
      field: 'role_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      field: 'user_id',
      type: DataTypes.STRING,
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
    tableName: 'user_role',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  return UserRole;
};

export default UserRoleModel;
