import express from 'express'
import {Router} from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import epilogue from 'epilogue'
import dbconfig from './config/DBConfig'
import models from './models'

const App = express();

App.use(logger('dev'));
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));
App.use(cookieParser());

// app.use('/', routes);
// App.use('/', Router().get('/', (req, res, next) => res.json({bano:'car'})));
//
// App.use('/bano', Router().get('/', (req, res, next) => res.json({bano:'smrdi'})));

epilogue.initialize({
  app: App,
  sequelize: dbconfig
});

var userResource = epilogue.resource({
  model: models.users,
  endpoints: ['/users', '/users/:id']
});


export default App;

//
//
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var Sequelize = require('sequelize');
// var routes = require('./routes/index');
//
// var User = require('./models/users');
// var Vote = require('./models/votes');
// var Transport = require('./models/transports');
// var Place = require('./models/places');
// var Currency = require('./models/currencies');
//
// var app = express();
//
// // uncomment after placing your favicon in /public
// //app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
//
// app.use('/', routes);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handlers
//
// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });
//
// var sequelize = new Sequelize('postgres://postgres:test1234@localhost:5432/aroundSlo');
//
// User(sequelize, Sequelize).sync().then(function () {
//
//   Vote(sequelize, Sequelize).sync({force: true});
//   User(sequelize, Sequelize).create({
//     name: 'John',
//     surname: 'Hancock',
//     email: 'marovt@gmail.com',
//     mobile_verified: false
//   });
//
//   var user = User(sequelize, Sequelize).findOne();
//
//   console.log(user.name);
//   // Currency(sequelize, Sequelize).sync({force: true}).then(function() {
//   //   Place(sequelize, Sequelize).sync({force: true}).then(function() {
//   //     Transport(sequelize, Sequelize).sync({force: true});
//   //   });
//   // });
//
//
// });
//
//
//
// module.exports = app;
