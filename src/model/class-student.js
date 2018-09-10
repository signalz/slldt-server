const Sequelize = require('sequelize');
module.exports = function(sequelize) {
    return sequelize.define('ClassStudent', {
        timestamps: false,
        classId: {
            field: 'class_id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        studentId: {
            field: 'student_id',
            type: Sequelize.INTEGER,
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
        tableName: 'class_student',
        createdAt: 'createdDate',
        updatedAt: 'updatedDate'
    });
};