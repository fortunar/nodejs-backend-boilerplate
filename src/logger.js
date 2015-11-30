// import winston from 'winston'
import winston from 'winston';
import winstonMongodb from 'winston-mongodb';
import dbconfig from './../config/config.json';

export const logger = new (winston.Logger)({
  transports: [
    new(winston.transports.MongoDB)({
        db : dbconfig.mongodb.db,
        collection: 'logsTest',
        capped: dbconfig.mongodb.capped,
        cappedSize: dbconfig.mongodb.cappedSize
    }),
    new (winston.transports.Console)(),
  ]
});
