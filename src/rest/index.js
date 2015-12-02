import config from './../../config/config.json';
import Sequelize from 'sequelize'
import epilogue from 'epilogue'
import express from 'express'
import jwt from 'jsonwebtoken'

import models from '../../models'
import {auth, logger} from './../interceptors'
import login from './login/login'
import passportStrategyInit from './login/passport'

const conf = config[process.env.NODE_ENV || 'development'];

export default function(App, passport){

  passportStrategyInit(passport);

  epilogue.initialize({
    app: App,
    sequelize: new Sequelize(conf.database, conf.username, conf.password, conf)
  });

  App.use('/login', login(passport));

  App.get('/', function(req,res){
    res.write("We are aroundSLO!");
  });

  var users = epilogue.resource({
    model: models.users,
    endpoints: ['/users', '/users/:id_user']
  });

  users.use(auth);
  users.use(logger);

}
