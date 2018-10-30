const RoleModel = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
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
          msg: 'Role Name too long',
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
    tableName: 'role',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  // Class Method
  Role.associate = (models) => {
    Role.belongsToMany(models.user, {
      as: 'users', through: models.userRole, foreignKey: 'role_id', onDelete: 'CASCADE',
    });
    Role.belongsToMany(models.function, {
      as: 'functions', through: models.roleFunction, foreignKey: 'role_id', onDelete: 'CASCADE',
    });
  };

  return Role;
};

export default RoleModel;
