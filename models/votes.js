'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Vote', {
        idUserDriver: {
            type: DataTypes.INTEGER,
            field: "id_user_driver",
            allowNull: false,
            primaryKey: true,
            references: {
                model: "users",
                key: "id_user"
            },
            onUpdate: "NO ACTION",
            onDelete: "NO ACTION"
        },
        idUserLiker: {
            type: DataTypes.INTEGER,
            field: "id_user_liker",
            allowNull: false,
            primaryKey: true,
            references: {
                model: "users",
                key: "id_user"
            },
            onUpdate: "NO ACTION",
            onDelete: "NO ACTION"
        },
        val: {
            type: DataTypes.INTEGER,
            field: "val",
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: "createdAt",
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: "updatedAt",
            allowNull: false
        }
    }, {
        schema: "public",
        tableName: "votes",
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var models = require('./index');
    var Vote = models.Vote;
    var User = models.User;

    Vote.belongsTo(User, {
        as: "RelatedIdUserDriver",
        foreignKey: "id_user_driver",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    Vote.belongsTo(User, {
        as: "RelatedIdUserLiker",
        foreignKey: "id_user_liker",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

};
