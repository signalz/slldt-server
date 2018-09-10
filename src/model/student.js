const Sequelize = require('sequelize');
module.exports = function(sequelize) {
    return sequelize.define('Student', {
        timestamps: false,
        studentId: {
            field: 'student_id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        studentName: {
            field: 'student_name',
            type: Sequelize.STRING,
            allowNull: false
        },
        admissionDate: {
            field: 'admission_date',
            type: Sequelize.DATE
        },
        dateOfBirth: {
            field: 'date_of_birth',
            type: Sequelize.DATE
        },
        school: {
            field: 'school',
            type: Sequelize.STRING
        },
        parentName: {
            field: 'parent_name',
            type: Sequelize.STRING
        },
        parentPhone: {
            field: 'parent_phone',
            type: Sequelize.STRING
        },
        parentMail: {
            field: 'parent_mail',
            type: Sequelize.STRING
        },
        address: {
            field: 'address',
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
        tableName: 'student',
        createdAt: 'createdDate',
        updatedAt: 'updatedDate'
    });
};