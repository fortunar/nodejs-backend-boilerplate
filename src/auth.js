import jwt from 'jsonwebtoken'

const jwtSecret = "secret";

export const createToken = (user) => {
  return jwt.sign({id: user.id_user, name: user.name}, jwtSecret, {
    expiresInMinutes: 5
  });
};

export const checkToken = (token) => {
  return jwt.verify(token, jwtSecret);
};

export const checkUserToken = (token, context) =>{
  console.log('check user token');
  try {
    const decoded = checkToken(token);
  } catch(err) {
    return context.error(401, "Not authenticated.");
  }
  return context.continue;
};

// export function checkUserRole(token, context, roles){
//   console.log('check user token');
//   try {
//     const decoded = checkToken(token);
//     //TODO check if role in decoded in roles
//   } catch(err) {
//     return context.error(401, "Not authenticated.");
//   }
//   return context.continue;
// }
//
// export function checkUserId(token, context, id){
//   console.log('check user token');
//   try {
//     const decoded = checkToken(token);
//     //TODO check if id of user in decoded matches id
//   } catch(err) {
//     return context.error(401, "Not authenticated.");
//   }
//   return context.continue;
// }
