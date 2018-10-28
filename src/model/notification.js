const NotificationModel = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    id: {
      field: 'id',
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    studentId: {
      field: 'student_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      field: 'content',
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
    tableName: 'notification',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  return Notification;
};

export default NotificationModel;
