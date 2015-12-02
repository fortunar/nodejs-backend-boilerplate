import {logger} from './../../logger'
import express from 'express'
import {createToken} from './../../token_helper'

export default function (passport) {
  const router = express.Router();

  // request facebook login
  router.get('/facebook',
    function(req, res, next) {
      passport.authenticate('facebook', { scope: 'email' }, function(err, user, message){
          if(err || !user){
            res.status(401);
          }
          return res.send(message);
        })(req, res, next);
    }
  );

  // facebook login callback
  router.get('/facebook/callback',
    function(req, res, next) {
      passport.authenticate('facebook', { failureRedirect: '/login' }, function(err, user, message) {
        if(err || !user) {
          res.status(401)
        }

        res.json({
          user: user,
          token: createToken(user)
        });

      })(req,res,next);
    }
  );

  router.get('/google',
    function(req, res, next) {
      passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me' }, function(err, user, message) {
        if(err || !user){
          res.status(401);
        }
        return res.send(message);
      })(req, res, next);
    }
  );

  router.get('/google/callback',
    function(req, res, next) {
      passport.authenticate('google', { failureRedirect: '/login' }, function(err, user, message) {
        console.log(err);
        if(err || !user) {
          res.status(401)
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
        }

        res.json({
          user: user,
          token: createToken(user)
        });
      })(req,res, next);
    }
  );

  return router;
}
