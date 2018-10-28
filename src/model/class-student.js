const ClassStudentModel = (sequelize, DataTypes) => {
  const ClassStudent = sequelize.define('ClassStudent', {
    classId: {
      field: 'class_id',
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    studentId: {
      field: 'student_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      field: 'created_by',
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdDate: {
      field: 'created_date',
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedBy: {
      field: 'updated_by',
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedDate: {
      field: 'updated_date',
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'class_student',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  return ClassStudent;
};

export default ClassStudentModel;
