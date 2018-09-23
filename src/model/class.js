const ClassModel = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    classId: {
      field: 'class_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    className: {
      field: 'class_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacherName: {
      field: 'teacher_name',
      type: DataTypes.STRING,
    },
    teacherPhone: {
      field: 'teacher_phone',
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
    tableName: 'class',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
    classMethods: {
      associate: (models) => {
        Class.belongsToMany(models.student, { through: models.class_student });
      },
    },
  });

  return Class;
};

export default ClassModel;
