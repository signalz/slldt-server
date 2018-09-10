const Sequelize = require('sequelize');
module.exports = function(sequelize) {
    return sequelize.define('Notification', {
        timestamps: false,
        notifyId: {
            field: 'notify_id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        studentId: {
            field: 'student_id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        content: {
            field: 'content',
            type: Sequelize.STRING,
            allowNull: false
        },
        createdBy: {
            field: 'created_by',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        createdDate: {
            field: 'created_date',
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedBy: {
            field: 'updated_by',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        updatedDate: {
            field: 'updated_date',
            type: Sequelize.DATE,
            allowNull: false
        }
    
    }, {
        tableName: 'notification',
        createdAt: 'createdDate',
        updatedAt: 'updatedDate'
    });
};