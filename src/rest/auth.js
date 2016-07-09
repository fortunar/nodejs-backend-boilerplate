import jwt from 'jsonwebtoken'

const jwtSecret = "secret";
const oneWeek = 60 * 24 * 7;
const oneHour = 0;

export const createToken = (user) => {
  return jwt.sign({id: user.id_user, name: user.name}, jwtSecret, {
    expiresInMinutes: oneWeek
  });
};

export const checkToken = (token) => {
  return jwt.verify(token, jwtSecret);
};

const updateToken = (token, res) => {
  const { payload: {id, name, exp }} = jwt.decode(token, {complete: true});
  const curTime = Date.now();
  if (exp - curTime < (oneWeek - oneHour) * 60 * 1000) {
    res.cookie('nodejs-backend-boilerplate-token', createToken({'id_user': id, 'name': name}), {maxAge:10000});
  }
}

export const checkUserToken = (token, res, context) =>{
  try {
    checkToken(token);
    updateToken(token, res);
  } catch(err) {
    return context.error(401, "Not authenticated.");
  }
  return context.continue;
};
