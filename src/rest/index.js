import config from './../../config/config.json';
import Sequelize from 'sequelize'
import epilogue from 'epilogue'
import express from 'express'
import jwt from 'jsonwebtoken'

import models from '../../models'
import {auth, logger} from './../interceptors'
import login from './../login'
import initLoginStrategies from './../login'

const conf = config[process.env.NODE_ENV || 'development'];

export default function(App, passport){

  passportStrategyInit(passport);

  epilogue.initialize({
    app: App,
    sequelize: new Sequelize(conf.database, conf.username, conf.password, conf)
  });


  // App.use('/', function(req,res){
  //   var token = jwt.sign({user:"marko"}, "secret", {
  //           expiresInMinutes: 2
  //         });
  //   res.json({
  //     user:"bano",
  //     token: token
  //   })
  // });

  App.use('/login', login(passport));


  var users = epilogue.resource({
    model: models.users,
    endpoints: ['/users', '/users/:id_user']
  });

  users.use(auth);
  users.use(logger);

}
