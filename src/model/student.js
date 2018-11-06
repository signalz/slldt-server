const StudentModel = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
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
          msg: 'Student Name too long',
        },
      },
    },
    admissionDate: {
      field: 'admission_date',
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
      },
    },
    dateOfBirth: {
      field: 'date_of_birth',
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
      },
    },
    school: {
      field: 'school',
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 250],
          msg: 'School too long',
        },
      },
    },
    address: {
      field: 'address',
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 250],
          msg: 'Address too long',
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
    tableName: 'student',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  // Class Method
  Student.associate = (models) => {
    Student.hasMany(models.score, { as: 'scores', foreignKey: 'student_id', onDelete: 'CASCADE' });
    Student.hasMany(models.notification, { as: 'notifications', foreignKey: 'student_id', onDelete: 'CASCADE' });
    Student.hasMany(models.parentInfo, { as: 'parentInfo', foreignKey: 'student_id', onDelete: 'CASCADE' });
    Student.belongsToMany(models.class, {
      as: 'classes', through: models.classStudent, foreignKey: 'student_id', otherKey: 'class_id',
    });
  };

  return Student;
};

export default StudentModel;
