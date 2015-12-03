import {logger} from './../../logger'
import express from 'express'
import {createToken} from './../../auth'

export default function (passport) {
  const router = express.Router();

  // request facebook login
  router.get('/facebook',
      passport.authenticate('facebook', { scope: 'email' })
  );

  // facebook login callback
  router.get('/facebook/callback',
    function(req, res, next) {
      passport.authenticate('facebook', { failureRedirect: '/login' }, function(err, user, message) {
        if(err || !user) {
          res.status(401)
        } else {
          res.json({
              user: user,
              token: createToken(user)
          });
        }
      })(req,res,next);
    }
  );

  router.get('/google',
      passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email' })
  );

  router.get('/google/callback',
    function(req, res, next) {
      passport.authenticate('google', { failureRedirect: '/login' }, function(err, user, message) {
        if(err || !user) {
          res.status(401);
          res.send(err);
        } else {
          res.json({
            user: user,
            token: createToken(user)
          });
        }
      })(req,res,next);
    });

  router.post('/local',
    function(req, res, next){
      passport.authenticate('local', function(err, user, message){
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
