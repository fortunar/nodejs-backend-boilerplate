import models from '../../models'
import epilogue from 'epilogue'


export default function(){

  var userResource = epilogue.resource({
    model: models.users,
    endpoints: ['/users', '/users/:id_user']
  });
  
}
