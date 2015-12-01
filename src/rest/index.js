import models from '../../models'
import epilogue from 'epilogue'
import {auth, logger} from './../interceptors'
import dbconfig from './../../config/DBConfig'
import express from 'express'
import login from './../login'
import jwt from 'jsonwebtoken'

export default function(App){

  epilogue.initialize({
    app: App,
    sequelize: dbconfig
  });

  const routes = express.Router();

  routes.get('/', function(req,res){
    var token = jwt.sign({user:"marko"}, "secret", {
            expiresInMinutes: 2
          });
    res.json({
      user:"bano",
      token: token
    })
  });


  App.use('/login', routes);

  var users = epilogue.resource({
    model: models.users,
    endpoints: ['/users', '/users/:id_user']
  });

  users.use(auth);
  users.use(logger);

}
