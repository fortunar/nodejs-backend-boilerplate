'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        idUser: {
            type: DataTypes.INTEGER,
            field: "id_user",
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(255),
            field: "email",
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            field: "name",
            allowNull: true
        },
        surname: {
            type: DataTypes.STRING(255),
            field: "surname",
            allowNull: false
        },
        mobile: {
            type: DataTypes.STRING(255),
            field: "mobile",
            allowNull: true
        },
        mobileVerified: {
            type: DataTypes.BOOLEAN,
            field: "mobile_verified",
            allowNull: true,
            defaultValue: false
        },
        idFb: {
            type: DataTypes.BIGINT,
            field: "id_fb",
            allowNull: true
        },
        idGmail: {
            type: DataTypes.STRING(255),
            field: "id_gmail",
            allowNull: true
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
        },
        password: {
            type: DataTypes.STRING(50),
            field: "password",
            allowNull: true
        }
    }, {
        schema: "public",
        tableName: "users",
        timestamps: false,
        instanceMethods: {
            toJSON: function () {
                var values = this.get();

                delete values.password;
                delete values.createdAt;
                delete values.updatedAt;
                return values;
            }
        }
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var models = require('./index');
    var User = models.User;
    var Transport = models.Transport;
    var Vote = models.Vote;
    var Place = models.Place;
    var Currency = models.Currency;

    User.hasMany(Transport, {
        as: "TransportsIdUserFkeys",
        foreignKey: "id_user",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    User.hasMany(Vote, {
        as: "VotesIdUserDriverFkeys",
        foreignKey: "id_user_driver",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    User.hasMany(Vote, {
        as: "VotesIdUserLikerFkeys",
        foreignKey: "id_user_liker",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

};
