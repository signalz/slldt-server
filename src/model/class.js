const ClassModel = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    id: {
      field: 'id',
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 250],
          msg: 'Class Name too long',
        },
      },
    },
    teacherName: {
      field: 'teacher_name',
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 250],
          msg: 'Teacher Name too long',
        },
      },
    },
    teacherPhone: {
      field: 'teacher_phone',
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 250],
          msg: 'Teacher Phone too long',
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
    tableName: 'class',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  // Class Method
  Class.associate = (models) => {
    Class.belongsToMany(models.student, {
      as: 'students', through: models.classStudent, foreignKey: 'class_id', otherKey: 'student_id',
    });
  };

  return Class;
};

export default ClassModel;
