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
  });

  // Class Method
  Class.associate = (models) => {
    Class.belongsToMany(models.student, {
      as: 'students', through: models.class_student, foreignKey: 'class_id', onDelete: 'CASCADE',
    });
  };

  return Class;
};

export default ClassModel;
