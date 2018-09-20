const ScoreModel = (sequelize, DataTypes) => {
  const Score = sequelize.define('Score', {
    studentId: {
      field: 'student_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    month: {
      field: 'month',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    score: {
      field: 'score',
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      field: 'link',
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
    tableName: 'score',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  // Score.associate = (models) => {
  //   models.Score.belongTo(models.Student, {
  //     onDelete: 'CASCADE',
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //     targetKey: 'student_id',
  //   });
  // };

  return Score;
};

export default ScoreModel;
