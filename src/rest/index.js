import models from '../../models'
import epilogue from 'epilogue'
import {auth, logger} from './../handlers'


export default function(){

  var users = epilogue.resource({
    model: models.users,
    endpoints: ['/users', '/users/:id_user']
  });

  users.use(auth);
  users.use(logger);

}
