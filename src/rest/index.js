import config from './../../config/config.json';
import Sequelize from 'sequelize';
import epilogue from 'epilogue';
import jwt from 'jsonwebtoken';

// import models from '../../models';

import {basicAuth, logger} from './../interceptors';
import login from './login/login';
import passportStrategyInit from './login/passport';

import {initialize as initializeTransportsREST} from './transports/transports';
import {initialize as initializeUsersREST} from './users/users';
import models from './../../models';

const conf = config[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(conf.database, conf.username, conf.password, conf);

export default (App, passport)=> {

  passportStrategyInit(passport);


  epilogue.initialize({
    app: App,
    sequelize: sequelize
  });

  console.log(models.isInitialized);

  App.use('/login', login(passport));

  App.get('/', (req,res) => {
    res.send("We are aroundSLO!");
  });

  const modelsInitialized = models.init(sequelize);

  initializeTransportsREST(epilogue, modelsInitialized);
  initializeUsersREST(epilogue, modelsInitialized);

}
