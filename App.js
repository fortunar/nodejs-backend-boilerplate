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


initRest(App,passport);

export default App;
