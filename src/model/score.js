const Sequelize = require('sequelize');
module.exports = function(sequelize) {
    return sequelize.define('Score', {
        timestamps: false,
        studentId: {
            field: 'student_id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        month: {
            field: 'month',
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        score: {
            field: 'score',
            type: Sequelize.STRING,
            allowNull: false
        },
        link: {
            field: 'link',
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
        tableName: 'score',
        createdAt: 'createdDate',
        updatedAt: 'updatedDate'
    });
};