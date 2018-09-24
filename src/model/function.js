const FunctionModel = (sequelize, DataTypes) => {
  const Function = sequelize.define('Function', {
    functionId: {
      field: 'function_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    functionName: {
      field: 'function_name',
      type: DataTypes.STRING,  
    },
    method: {
      field: 'method',
      type: DataTypes.STRING,
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
        Function.belongsToMany(models.role, { through: models.role_function });
      },
    },
  });

  return Function;
};

export default FunctionModel;
