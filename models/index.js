'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var conf    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (conf.use_env_variable) {
  var sequelize = new Sequelize(process.env[conf.use_env_variable]);
} else {
  var sequelize = new Sequelize(conf.postgresdb.database, conf.postgresdb.username, conf.postgresdb.password, conf.postgresdb);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
