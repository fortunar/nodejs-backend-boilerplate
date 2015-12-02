import jwt from 'jsonwebtoken'

const jwtSecret = "secret";

export function createToken(user) {
  return jwt.sign({id: user.id_user, name: user.name}, jwtSecret, {
    expiresInMinutes: 5
  });
}

export function checkToken(token) {
  return jwt.verify(req.headers.token, jwtSecret);
}
