import {logger} from './../../logger'
import express from 'express'
import {createToken} from './../auth'

const createUserCookie = (user, res) => {
  res.cookie('around_token', createToken(user), {maxAge:10000});
  res.cookie('around_user_id', user.idUser, {maxAge: 10000});
}

const handleLoginCallbackRedirect = (err, user, res)=> {
  if(err || !user) {
    res.redirect(401,`http://localhost:3000/?message=${err}`) ;
  } else {
    createUserCookie(user, res);
    res.redirect('http://localhost:3000/');
  }
}

export default (passport) => {
  const router = express.Router();

  // request facebook login
  router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

  // facebook login callback
  router.get('/facebook/callback',
    (req, res, next) => {
      passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000/users' }, (err, user)=> {
        handleLoginCallbackRedirect(err, user, res);
      })(req,res,next);
    }
  );

  router.get('/google',
      passport.authenticate('google', { scope: 'https://www.googleapis.com/basicAuth/userinfo.profile https://www.googleapis.com/basicAuth/userinfo.email' })
  );

  router.get('/google/callback',
    (req, res, next) => {
      passport.authenticate('google', { failureRedirect: 'http://localhost:3000/user' }, (err, user) => {
        handleLoginCallbackRedirect(err, user, res);
      })(req,res,next);
    });

  router.post('/local',
    (req, res, next) =>{
      passport.authenticate('local', (err, user, message)=>{
        if(err || !user) {
          res.status(401);
          res.send(message);
        } else {
          createUserCookie(user, res);
          res.send(message);
        }
      })(req,res, next);
    }
  );

  return router;
}
