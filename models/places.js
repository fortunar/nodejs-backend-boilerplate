'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Place', {
        idPlace: {
            type: DataTypes.INTEGER,
            field: "id_place",
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        country: {
            type: DataTypes.STRING(255),
            field: "country",
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(255),
            field: "city",
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
        tableName: "places",
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var models = require('./index');
    var Place = models.Place;
    var Transport = models.Transport;
    var Currency = models.Currency;
    var User = models.User;

    Place.hasMany(Transport, {
        as: "TransportsIdArrivalPlaceFkeys",
        foreignKey: "id_arrival_place",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    Place.hasMany(Transport, {
        as: "TransportsIdDeparturePlaceFkeys",
        foreignKey: "id_departure_place",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    Place.belongsToMany(Currency, {
        as: "TransportIdCurrencies",
        through: Transport,
        foreignKey: "id_arrival_place",
        otherKey: "id_currency",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    Place.belongsToMany(Place, {
        as: "TransportIdDeparturePlaces",
        through: Transport,
        foreignKey: "id_arrival_place",
        otherKey: "id_departure_place",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    Place.belongsToMany(User, {
        as: "TransportIdUsers",
        through: Transport,
        foreignKey: "id_arrival_place",
        otherKey: "id_user",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    Place.belongsToMany(Place, {
        as: "TransportIdArrivalPlaces",
        through: Transport,
        foreignKey: "id_departure_place",
        otherKey: "id_arrival_place",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    Place.belongsToMany(Currency, {
        as: "TransportIdCurrencies",
        through: Transport,
        foreignKey: "id_departure_place",
        otherKey: "id_currency",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    Place.belongsToMany(User, {
        as: "TransportIdUsers",
        through: Transport,
        foreignKey: "id_departure_place",
        otherKey: "id_user",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

};
