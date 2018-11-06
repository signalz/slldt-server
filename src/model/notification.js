const NotificationModel = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    id: {
      field: 'id',
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      field: 'content',
      type: DataTypes.STRING,
      allowNull: false,
    },
    isRead: {
      field: 'is_read',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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

  // Class Method
  Notification.associate = (models) => {
    Notification.belongsTo(models.student, {
      as: 'student',
      foreignKey: 'student_id',
    });
  };

  return Notification;
};

export default NotificationModel;
