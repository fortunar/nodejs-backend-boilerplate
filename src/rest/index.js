import config from './../../config/config.json';
import Sequelize from 'sequelize';
import epilogue from 'epilogue';
import jwt from 'jsonwebtoken';

import models from '../../models';
import {basicAuth, logger} from './../interceptors';
import login from './login/login';
import passportStrategyInit from './login/passport';

import {initialize as initializeTransportsREST} from './transports/transports';

const conf = config[process.env.NODE_ENV || 'development'];

export default (App, passport)=> {

  passportStrategyInit(passport);

  epilogue.initialize({
    app: App,
    sequelize: new Sequelize(conf.database, conf.username, conf.password, conf)
  });

  App.use('/login', login(passport));

  App.get('/', (req,res) => {
    res.send("We are aroundSLO!");
  });

  initializeTransportsREST(epilogue);

//  var users = epilogue.resource({
//    model: models.users,
//    endpoints: ['/users', '/users/:id_user']
//  });
//
//  users.use(basicAuth);
//  users.use(logger);

}
