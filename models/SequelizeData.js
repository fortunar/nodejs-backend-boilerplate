'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SequelizeDatum', {
        name: {
            type: DataTypes.STRING(255),
            field: "name",
            allowNull: false,
            primaryKey: true
        }
    }, {
        schema: "public",
        tableName: "SequelizeData",
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var models = require('./index');
    var SequelizeDatum = models.SequelizeDatum;

};
