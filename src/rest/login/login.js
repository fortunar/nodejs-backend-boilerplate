import {logger} from './../../logger'
import express from 'express'
import {createToken} from './../../auth'

const handleLoginCallbackRedirect = (err, user, res)=> {
  if(err || !user) {
    res.redirect(401,`http://localhost:3000/?message=${err}`) ;
  } else {
    res.cookie('user', {'id': user.dataValues.id_user, 'email': user.dataValues.email });
    res.cookie('token', createToken(user));
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
      passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email' })
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
          res.cookie('user', user.dataValues.email );
          res.cookie('token', createToken(user));
          res.send(message);
        }
      })(req,res, next);
    }
  );

  return router;
}
