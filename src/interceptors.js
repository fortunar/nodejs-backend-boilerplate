import {logger} from './logger'
import jwt from 'jsonwebtoken'

export const auth = {
  list: {
    auth: function(req, res, context) {

      try {
        //TODO check role permissions
        const decoded = jwt.verify(req.headers.token, 'secret');
      } catch(err) {
        return context.error(401, "Not authenticated.");
      }
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
