const Sequelize = require('sequelize');
module.exports = function(sequelize) {
    return sequelize.define('Role', {
        timestamps: false,
        roleId: {
            field: 'role_id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        roleName: {
            field: 'role_name',
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
        tableName: 'role',
        createdAt: 'createdDate',
        updatedAt: 'updatedDate'
    });
};