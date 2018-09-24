const StudentModel = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    studentId: {
      field: 'student_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    studentName: {
      field: 'student_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    admissionDate: {
      field: 'admission_date',
      type: DataTypes.DATE,
    },
    dateOfBirth: {
      field: 'date_of_birth',
      type: DataTypes.DATE,
    },
    school: {
      field: 'school',
      type: DataTypes.STRING,
    },
    parentName: {
      field: 'parent_name',
      type: DataTypes.STRING,
    },
    parentPhone: {
      field: 'parent_phone',
      type: DataTypes.STRING,
    },
    parentMail: {
      field: 'parent_mail',
      type: DataTypes.STRING,
    },
    address: {
      field: 'address',
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
    tableName: 'student',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
    classMethods: {
      associate: (models) => {
        Student.hasMany(models.score, {foreignKey: 'student_id', onDelete: 'CASCADE'});
        Student.hasMany(models.notification, {foreignKey: 'student_id', onDelete: 'CASCADE'});
        Student.belongsToMany(models.class, { through: models.class_student });
      },
    },
  });

  return Student;
};

export default StudentModel;
