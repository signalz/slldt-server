const ParentInfoModel = (sequelize, DataTypes) => {
  const ParentInfo = sequelize.define('ParentInfo', {
    id: {
      field: 'id',
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    student_id: {
      field: 'student_id',
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 250],
          msg: 'Parent Name too long',
        },
      },
    },
    phoneNumber: {
      field: 'phone_number',
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 250],
          msg: 'Phone number too long',
        },
      },
    },
    mail: {
      field: 'mail',
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 250],
          msg: 'Mail too long',
        },
        isEmail: {
          msg: 'Invalid email',
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
    tableName: 'parent_info',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  return ParentInfo;
};

export default ParentInfoModel;
