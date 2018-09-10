const Sequelize = require('sequelize');
module.exports = function(sequelize) {
    return sequelize.define('Function', {
        timestamps: false,
        functionId: {
            field: 'function_id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        path: {
            field: 'path',
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
        tableName: 'function',
        createdAt: 'createdDate',
        updatedAt: 'updatedDate'
    });
};