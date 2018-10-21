const ScoreModel = (sequelize, DataTypes) => {
  const Score = sequelize.define('Score', {
    scoreId: {
      field: 'score_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    studentId: {
      field: 'student_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    month: {
      field: 'month',
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      field: 'score',
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 250],
          msg: 'Score too long',
        },
      },
    },
    link: {
      field: 'link',
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 250],
          msg: 'Link too long',
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
    tableName: 'score',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  // Class Method
  Score.associate = (models) => {
    Score.belongsTo(models.student, {
      as: 'student', through: models.student, foreignKey: 'student_id', constraints: false,
    });
  };

  return Score;
};

export default ScoreModel;
