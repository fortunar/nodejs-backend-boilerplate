import facebook from 'passport-facebook'
import models from '../../../models'
import config from './../../../config/config.json'

const conf = config[process.env.NODE_ENV || 'development']

export default function (passport) {

  passport.use(new facebook.Strategy({
    clientID        : config.login.facebookAuth.clientID,
    clientSecret    : config.login.facebookAuth.clientSecret,
    callbackURL     : config.login.facebookAuth.callbackURL
  }, function(token, refreshToken, profile, done) {
    models.users.findOne({ 'id_fb' : profile.id }, function(err, user) {
      if(err) {
        done(err);
      }
      if(user) {
        return done(err, user);
      } else {
        return models.users.create({
          name: profile.name.givenName,
          lastname: profile.name.lastname,
          id_fb: profile.id,
          email: profile.emails[0].value
        });
      }
    });
  }));

}
