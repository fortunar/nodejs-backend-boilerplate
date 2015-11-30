import {logger} from './logger'

export const auth = {
    list: {
      fetch: function(req, res, context) {
        logger.info('Bano je car.',{king:true,vosu:false});
        return context.continue;
      }
    }
};

export const logging = {
    read: {
        fetch: function(req, res, context) {
          logger.info('We are golden.');
          return context.continue;
        }
      }
};
