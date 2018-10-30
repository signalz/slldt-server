const NotificationModel = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    id: {
      field: 'id',
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    studentId: {
      field: 'student_id',
      type: DataTypes.UUID,
      allowNull: false,
    },
    content: {
      field: 'content',
      type: DataTypes.STRING,
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
    tableName: 'notification',
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  });

  return Notification;
};

export default NotificationModel;
