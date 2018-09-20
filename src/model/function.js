const FunctionModel = (sequelize, DataTypes) => {
  const Function = sequelize.define('Function', {
    functionId: {
      field: 'function_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    path: {
      field: 'path',
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'function',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
    classMethods: {
      associate: (models) => {
        Function.belongsToMany(models.Role, { through: models.RoleFunction });
      },
    },
  });

  return Function;
};

export default FunctionModel;
