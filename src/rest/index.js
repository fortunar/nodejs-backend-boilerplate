import models from '../../models'
import epilogue from 'epilogue'
import {auth, logger} from './../interceptors'
import dbconfig from './../../config/DBConfig'
import express from 'express'
import jwt from 'jsonwebtoken'
import login from './login/login'
import passportStrategyInit from './login/passport'

export default function(App, passport){

  passportStrategyInit(passport);

  epilogue.initialize({
    app: App,
    sequelize: dbconfig
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
