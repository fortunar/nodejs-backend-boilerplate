/**
 * Created by rokfortuna on 1/5/16.
 */
import {basicAuth, logger} from './../../interceptors';
import models from './../../../models';

export const initialize = (epilogue) => {
  var users = epilogue.resource({
    model: models.User,
    endpoints: ['/users', '/users/:idUser']
  });

  users.use(basicAuth);
  users.use(logger);
}