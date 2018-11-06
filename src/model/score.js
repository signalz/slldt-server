import uuidv4 from 'uuid/v4';

const ScoreModel = (sequelize, DataTypes) => {
  const Score = sequelize.define('Score', {
    id: {
      field: 'id',
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: uuidv4(),
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
    tableName: 'score',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  // Class Method
  Score.associate = (models) => {
    Score.belongsTo(models.student, {
      as: 'student',
      foreignKey: 'student_id',
    });
  };

  return Score;
};

export default ScoreModel;
