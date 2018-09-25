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
      validate: {
        len: {
          args: [0, 250],
          msg: 'Function Name too long',
        },
      },
    },
    method: {
      field: 'method',
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        args: [['POST', 'GET', 'PUT', 'PATCH', 'DELETE', 'ALL']],
        msg: 'Wrong Method',
      },
    },
    path: {
      field: 'path',
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 250],
          msg: 'Function Name too long',
        },
      },
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
  });

  // Class method
  Function.associate = (models) => {
    Function.belongsToMany(models.role, { through: models.role_function, foreignKey: 'function_id', onDelete: 'CASCADE' });
  };

  return Function;
};

export default FunctionModel;
