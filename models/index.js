'use strict';

var models = {};
var initialized = false;

function init(sequelize) {
    delete module.exports.init; // Destroy itself to prevent repeated calls and clash with a model named 'init'.
    initialized = true;
    console.log('INIT');

    // Import model files and assign them to `model` object.
    models.SequelizeDatum = sequelize.import("./SequelizeData.js");
    models.SequelizeMetum = sequelize.import("./SequelizeMeta.js");
    models.Currency = sequelize.import("./currencies.js");
    models.Place = sequelize.import("./places.js");
    models.Transport = sequelize.import("./transports.js");
    models.User = sequelize.import("./users.js");
    models.Vote = sequelize.import("./votes.js");

    // All models are initialized. Now connect them with relations.
    require("./SequelizeData.js").initRelations();
    require("./SequelizeMeta.js").initRelations();
    require("./currencies.js").initRelations();
    require("./places.js").initRelations();
    require("./transports.js").initRelations();
    require("./users.js").initRelations();
    require("./votes.js").initRelations();
    return models;
};

// Note: While using this module, DO NOT FORGET FIRST CALL model.init(sequelize). Otherwise you get undefined.
module.exports = models;
module.exports.init = init;
module.exports.isInitialized = initialized;
