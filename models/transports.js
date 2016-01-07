'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Transport', {
        idTransport: {
            type: DataTypes.INTEGER,
            field: "id_transport",
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idUser: {
            type: DataTypes.INTEGER,
            field: "id_user",
            allowNull: false,
            references: {
                model: "users",
                key: "id_user"
            },
            onUpdate: "NO ACTION",
            onDelete: "NO ACTION"
        },
        idDeparturePlace: {
            type: DataTypes.INTEGER,
            field: "id_departure_place",
            allowNull: false,
            references: {
                model: "places",
                key: "id_place"
            },
            onUpdate: "NO ACTION",
            onDelete: "NO ACTION"
        },
        idArrivalPlace: {
            type: DataTypes.INTEGER,
            field: "id_arrival_place",
            allowNull: false,
            references: {
                model: "places",
                key: "id_place"
            },
            onUpdate: "NO ACTION",
            onDelete: "NO ACTION"
        },
        departureTime: {
            type: DataTypes.DATE,
            field: "departure_time",
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT(24),
            field: "price",
            allowNull: false
        },
        idCurrency: {
            type: DataTypes.INTEGER,
            field: "id_currency",
            allowNull: false,
            references: {
                model: "currencies",
                key: "id_currency"
            },
            onUpdate: "NO ACTION",
            onDelete: "NO ACTION"
        },
        passangersNumber: {
            type: DataTypes.INTEGER,
            field: "passangers_number",
            allowNull: false
        },
        vehicleDesc: {
            type: DataTypes.STRING(255),
            field: "vehicle_desc",
            allowNull: true
        },
        insurence: {
            type: DataTypes.BOOLEAN,
            field: "insurence",
            allowNull: false
        },
        additionalInfo: {
            type: DataTypes.TEXT,
            field: "additional_info",
            allowNull: true
        },
        highway: {
            type: DataTypes.BOOLEAN,
            field: "highway",
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
        tableName: "transports",
        timestamps: false,
        instanceMethods: {
            toJSON: function () {
                var values = this.get();

                delete values.id_currency;
                delete values.id_arrival_place;
                delete values.id_departure_place;
                delete values.id_user;

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
    var Transport = models.Transport;
    var Place = models.Place;
    var Currency = models.Currency;
    var User = models.User;

    Transport.belongsTo(Place, {
        as: "arrivalPlace",
        foreignKey: "id_arrival_place",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    Transport.belongsTo(Currency, {
        as: "currency",
        foreignKey: "id_currency",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    Transport.belongsTo(Place, {
        as: "departurePlace",
        foreignKey: "id_departure_place",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

    Transport.belongsTo(User, {
        as: "user",
        foreignKey: "id_user",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

};
