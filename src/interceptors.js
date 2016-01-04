import {logger} from './logger'
import jwt from 'jsonwebtoken'
import {checkToken, checkUserToken} from './rest/auth'

export const basicAuth = {
  create : {
    auth: (req, res, context) => {
      return checkUserToken(req.headers.token, context);
    }
  },
  list: {
    auth: (req, res, context) => {
      return context.continue;
    }
  },
  read: {
    auth: (req, res, context) => {
      return context.continue;
    }
  },
  update: {
    auth: (req, res, context) => {
      return checkUserToken(req.headers.token, context);
    }
  },
  delete: {
    auth: (req, res, context) => {
      return checkUserToken(req.headers.token, context);
    }
  }
};

export const logging = {
  create : {
    fetch: (req, res, context) => {
      console.log('LOGGER');
      return context.continue;
    }
  },
  list: {
    fetch: (req, res, context) => {
      console.log('LOGGER');
      return context.continue;
    }
  },
  read: {
    fetch: (req, res, context) => {
      console.log('LOGGER');
      return context.continue;
    }
  },
  update: {
    fetch: (req, res, context) => {
      console.log('LOGGER');
      return context.continue;
    }
  },
  delete: {
    fetch: (req, res, context) => {
      console.log('LOGGER');
      return context.continue;
    }
  }
};
