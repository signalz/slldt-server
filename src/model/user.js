const Sequelize = require('sequelize');
module.exports = function(sequelize) {
    return sequelize.define('User', {
        timestamps: false,
        userId: {
            field: 'user_id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        userName: {
            field: 'user_name',
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            field: 'password',
            type: Sequelize.STRING,
            allowNull: false
        },
        name: {
            field: 'name',
            type: Sequelize.STRING
        },
        dateOfBirth: {
            field: 'date_of_birth',
            type: Sequelize.DATE
        },
        mail: {
            field: 'mail',
            type: Sequelize.STRING
        },
        phone: {
            field: 'phone',
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
        tableName: 'user',
        createdAt: 'createdDate',
        updatedAt: 'updatedDate'
    });
};