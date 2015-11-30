import express from 'express'
import {Router} from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dbconfig from './config/DBConfig'
import epilogue from 'epilogue'
import initializeRest from './src/rest/index'

import jwt from 'jsonwebtoken'

const App = express();

App.use(logger('dev'));
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));
App.use(cookieParser());

epilogue.initialize({
  app: App,
  sequelize: dbconfig
});

initializeRest();



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


export default App;
