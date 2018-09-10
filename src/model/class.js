const Sequelize = require('sequelize');
module.exports = function(sequelize) {
    return sequelize.define('Class', {
        timestamps: false,
        classId: {
            field: 'class_id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        className: {
            field: 'class_name',
            type: Sequelize.STRING,
            allowNull: false
        },
        teacherName: {
            field: 'teacher_name',
            type: Sequelize.STRING
        },
        teacherPhone: {
            field: 'teacher_phone',
            type: Sequelize.STRING
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
        tableName: 'class',
        createdAt: 'createdDate',
        updatedAt: 'updatedDate'
    });
};