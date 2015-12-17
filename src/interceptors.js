import {logger} from './logger'
import jwt from 'jsonwebtoken'
import {checkToken, checkUserToken} from './auth'

export const auth = {
  list: {
    auth: (req, res, context) => {
      return checkUserToken(req.headers.token, res, context);
    }
  }
};

export const logging = {
  read: {
      fetch: (req, res, context) => {
        return context.continue;
      }
    }
};
