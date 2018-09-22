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
    classMethods: {
      associate: (models) => {
        Role.belongsToMany(models.User, { through: models.UserRole });
        Role.belongsToMany(models.Function, { through: models.RoleFunction });
      },
    },
  });

  return Role;
};

export default RoleModel;
