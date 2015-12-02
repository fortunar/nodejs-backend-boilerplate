import {logger} from './../../logger'
import express from 'express'

export default function (passport) {
  const router = express.Router();

  // request facebook login
  router.get('/facebook',
    passport.authenticate('facebook', { scope: 'email'}));

  // facebook login callback
  router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.

      console.log("BRAVO");
      res.redirect('/');
    });

  router.post('/local',
    function(req, res, next){
      passport.authenticate('local', function(err, user, message){
        if(err || !user){
          res.status(401);
        }
        return res.send(message);
      })(req,res, next);
    }
  );

  return router;
}
