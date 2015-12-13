import express from 'express'
import {Router} from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import initRest from './src/rest/index'
import passport from 'passport'
import epilogue from 'epilogue'

const App = express();

App.use(logger('dev'));
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));
App.use(cookieParser());
App.use(passport.initialize());

//App.use(function(req, res, next) {
//    console.log('SET HEADERS');
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
//});

initRest(App,passport);

export default App;
