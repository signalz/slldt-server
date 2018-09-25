const RoleModel = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    roleId: {
      field: 'role_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    roleName: {
      field: 'role_name',
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
    tableName: 'role',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  // Class Method
  Role.associate = (models) => {
    Role.belongsToMany(models.user, { through: models.user_role, foreignKey: 'role_id', onDelete: 'CASCADE' });
    Role.belongsToMany(models.function, { through: models.role_function, foreignKey: 'role_id', onDelete: 'CASCADE' });
  };

  return Role;
};

export default RoleModel;
