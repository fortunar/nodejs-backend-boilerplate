import winston from 'winston';
import winstonMongodb from 'winston-mongodb';
import config from './../config/app_config.json';

const conf = config[process.env.NODE_ENV || 'development']

export const logger = new (winston.Logger)({
  transports: [
    new(winston.transports.MongoDB)({
      db : conf.mongodb.db,
      collection: 'logsTest',
      capped: conf.mongodb.capped,
      cappedSize: conf.mongodb.cappedSize
    }),
    new (winston.transports.Console)(),
  ]
});
