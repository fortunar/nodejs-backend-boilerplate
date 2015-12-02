import Sequelize from 'sequelize'
import config from './config.json';

const conf = config[process.env.NODE_ENV || 'development'];
export default new Sequelize(conf.database, conf.username, conf.password, conf);
