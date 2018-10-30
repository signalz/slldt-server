const FunctionModel = (sequelize, DataTypes) => {
  const Function = sequelize.define('Function', {
    id: {
      field: 'id',
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      field: 'name',
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
    tableName: 'function',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  // Class method
  Function.associate = (models) => {
    Function.belongsToMany(models.role, {
      as: 'roles', through: models.roleFunction, foreignKey: 'function_id', onDelete: 'CASCADE',
    });
  };

  return Function;
};

export default FunctionModel;
