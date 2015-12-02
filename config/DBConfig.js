import Sequelize from 'sequelize'
import config from './config.json';

const conf = config[process.env.NODE_ENV || 'development'];
export default new Sequelize(conf.postgresdb.database, conf.postgresdb.username, conf.postgresdb.password, conf.postgresdb);
