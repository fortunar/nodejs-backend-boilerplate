import {logger} from './logger'
import jwt from 'jsonwebtoken'
import {checkToken, checkUserToken} from './auth'

export const auth = {
  list: {
    auth: function(req, res, context) {
      return checkUserToken(req.headers.token, context);
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
