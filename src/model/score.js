const ScoreModel = (sequelize, DataTypes) => {
  const Score = sequelize.define('Score', {
    studentId: {
      field: 'student_id',
      type: DataTypes.STRING,
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
    tableName: 'score',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  return Score;
};

export default ScoreModel;
