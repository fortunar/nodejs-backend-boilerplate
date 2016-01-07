/**
 * Created by rokfortuna on 1/5/16.
 */
import {basicAuth, logger} from './../../interceptors';

export const initialize = (epilogue, models) => {
  var users = epilogue.resource({
    model: models.User,
    endpoints: ['/users', '/users/:idUser']
  });

  users.use(basicAuth);
  users.use(logger);
}