import {logger} from './../../logger'
import express from 'express'
import {createToken} from './../../auth'

const extractUserLoginResponse = (user)=> {
  return JSON.stringify({'id': user.dataValues.id_user, 'email': user.dataValues.email });
}

export default (passport) => {
  const router = express.Router();

  // request facebook login
  router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

  // facebook login callback
  router.get('/facebook/callback',
    (req, res, next) => {
      console.log("LOGIN FACEBOOK");
      passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000/users' }, (err, user)=> {
        console.log("CALLBACK");
        if(err || !user) {
          res.status(401)
        } else {
          res.setHeader('user', extractUserLoginResponse(user));
          res.setHeader('token', createToken(user));
          res.redirect('http://localhost:3000/users');
        }
      })(req,res,next);
    }
  );

  router.get('/google',
      passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email' })
  );

  router.get('/google/callback',
    (req, res, next) => {
      passport.authenticate('google', { failureRedirect: 'http://localhost:3000/' }, (err, user) => {
        if(err || !user) {
          res.status(401);
          res.send(err);
        } else {
          res.setHeader('user', extractUserLoginResponse(user));
          res.setHeader('token', createToken(user));
          res.redirect('http://localhost:3000/users');
        }
      })(req,res,next);
    });

  router.post('/local',
    (req, res, next) =>{
      passport.authenticate('local', (err, user, message)=>{
        if(err || !user){
          res.status(401);
          res.send(message);
        }else{
          res.json({
            user: user,
            token: createToken(user)
          });
        }
      })(req,res, next);
    }
  );

  return router;
}
