import uuidv4 from 'uuid/v4';

const ClassStudentModel = (sequelize, DataTypes) => {
  const ClassStudent = sequelize.define('ClassStudent', {
    id: {
      field: 'id',
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: uuidv4(),
    },
    classId: {
      field: 'class_id',
      type: DataTypes.UUID,
      allowNull: false,
    },
    studentId: {
      field: 'student_id',
      type: DataTypes.UUID,
      allowNull: false,
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
    tableName: 'class_student',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  return ClassStudent;
};

export default ClassStudentModel;
