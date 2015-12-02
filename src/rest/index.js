import models from '../../models'
import epilogue from 'epilogue'
import {auth, logger} from './../interceptors'
import dbconfig from './../../config/DBConfig'
import express from 'express'
import login from './../login'
import jwt from 'jsonwebtoken'
import initLoginStrategies from './../login'

export default function(App, passport){

  epilogue.initialize({
    app: App,
    sequelize: dbconfig
  });

  // const routes = express.Router();
  //
  // routes.get('/', function(req,res){
  //   var token = jwt.sign({user:"marko"}, "secret", {
  //           expiresInMinutes: 2
  //         });
  //   res.json({
  //     user:"bano",
  //     token: token
  //   })
  // });
  //
  //
  // App.use('/login', routes);

  initLoginStrategies(passport);

  App.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  App.post('/login',
    function(req, res, next){
      console.log("before auth");
      passport.authenticate('local', function(err, user, message){
        if(err || !user){
          res.status(401);
        }
        return res.send(message);
      })(req,res, next);
    }
  );



  var users = epilogue.resource({
    model: models.users,
    endpoints: ['/users', '/users/:id_user']
  });

  users.use(auth);
  users.use(logger);

}
