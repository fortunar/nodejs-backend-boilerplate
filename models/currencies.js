'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Currency', {
        idCurrency: {
            type: DataTypes.INTEGER,
            field: "id_currency",
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        symbol: {
            type: DataTypes.STRING(255),
            field: "symbol",
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
        tableName: "currencies",
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var models = require('./index');
    var Currency = models.Currency;
    var Transport = models.Transport;
    var Place = models.Place;
    var User = models.User;

    Currency.hasMany(Transport, {
        as: "TransportsIdCurrencyFkeys",
        foreignKey: "id_currency",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

//    Currency.belongsToMany(Place, {
//        as: "TransportIdArrivalPlaces",
//        through: Transport,
//        foreignKey: "id_currency",
//        otherKey: "id_arrival_place",
//        onDelete: "NO ACTION",
//        onUpdate: "NO ACTION"
//    });
//
//    Currency.belongsToMany(Place, {
//        as: "TransportIdDeparturePlaces",
//        through: Transport,
//        foreignKey: "id_currency",
//        otherKey: "id_departure_place",
//        onDelete: "NO ACTION",
//        onUpdate: "NO ACTION"
//    });
//
//    Currency.belongsToMany(User, {
//        as: "TransportIdUsers",
//        through: Transport,
//        foreignKey: "id_currency",
//        otherKey: "id_user",
//        onDelete: "NO ACTION",
//        onUpdate: "NO ACTION"
//    });

};
