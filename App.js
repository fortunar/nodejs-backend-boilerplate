import express from 'express'
import {Router} from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dbconfig from './config/DBConfig'
import epilogue from 'epilogue'
import initializeRest from './src/rest/index'


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

export default App;
