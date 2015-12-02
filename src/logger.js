// import winston from 'winston'
import winston from 'winston';
import winstonMongodb from 'winston-mongodb';
import config from './../config/config.json';

const conf = config[process.env.NODE_ENV || 'development']

export const logger = new (winston.Logger)({
  transports: [
    new(winston.transports.MongoDB)({
        db : config.mongodb.db,
        collection: 'logsTest',
        capped: config.mongodb.capped,
        cappedSize: config.mongodb.cappedSize
    }),
    new (winston.transports.Console)(),
  ]
});
