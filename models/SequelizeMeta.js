'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SequelizeMetum', {
        name: {
            type: DataTypes.STRING(255),
            field: "name",
            allowNull: false,
            primaryKey: true
        }
    }, {
        schema: "public",
        tableName: "SequelizeMeta",
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var models = require('./index');
    var SequelizeMetum = models.SequelizeMetum;

};
