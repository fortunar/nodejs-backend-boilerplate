import {logger} from './logger'
import jwt from 'jsonwebtoken'
import {tokenCheck} from './token_helper'

export const auth = {
  list: {
    auth: function(req, res, context) {

      try {
        //TODO check role permissions
        const decoded = tokenCheck(req.headers.token);
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
