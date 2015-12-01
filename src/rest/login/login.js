import {logger} from './../../logger'
import express from 'express'

export default function (passport) {
  const router = express.Router();

  // request facebook login
  router.get('/login/facebok', function(req, res) {
    passport.authenticate('facebook');
  });

  // facebook login callback
  router.get('/login/facebook/callback', function(req, res) {
    passport.authenticate('facebook', {
        failureRedirect : '/'
    }, function() {
      logger.info("Successfully authenticated with facebook.");
    });
  });

  return router;
}
