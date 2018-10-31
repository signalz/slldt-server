const RoleFunctionModel = (sequelize, DataTypes) => {
  const RoleFunction = sequelize.define('RoleFunction', {
    roleId: {
      field: 'role_id',
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    functionId: {
      field: 'function_id',
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
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
    tableName: 'role_function',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });
  return RoleFunction;
};

export default RoleFunctionModel;
