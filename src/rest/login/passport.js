import facebook from 'passport-facebook'
import LocalStrategy from 'passport-local'
import models from '../../../models'
import config from './../../../config/app_config.json'
import google from 'passport-google-oauth'

const conf = config[process.env.NODE_ENV || 'development'];

export default (passport) => {

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(new facebook.Strategy({
    clientID        : conf.login.facebookAuth.clientID,
    clientSecret    : conf.login.facebookAuth.clientSecret,
    callbackURL     : conf.login.facebookAuth.callbackURL,
    profileFields   : ['id', 'displayName', 'name', 'emails']
  }, (token, refreshToken, profile, done) => {
    models.User.findOne({ 'where' : {'id_fb' : profile.id }}).then(function(user) {
      if(user) {
        return done(null, user);
      } else {
        models.User.sync().then(() => {
          return models.User.create({
            name: profile.name.givenName,
            surname: profile.name.familyName,
            id_fb: profile.id,
            email: profile.emails[0].value
          })
        }).then((user) => {
          return done(null, user);
        });
      }
    });
  }));

  passport.use(new google.OAuth2Strategy({
      clientID: conf.login.googleAuth.clientID,
      clientSecret: conf.login.googleAuth.clientSecret,
      callbackURL:  conf.login.googleAuth.callbackURL
    },
    (token, tokenSecret, profile, done) => {
      models.User.findOne({ 'where' : {'id_gmail' : profile.id }}).then((user) => {
        if(user) {
          return done(null, user);
        } else {
          models.User.sync().then( () => {
            return models.User.create({
              name: profile.name.givenName,
              surname: profile.name.familyName,
              id_gmail: profile.id,
              email: profile.emails[0].value
            })
          }).then((user) => {
            return done(null, user);
          });
        }
      });
    }
  ));

  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
      session: false
    },
    (req, email, password, done) => {
      models.User.findOne({
        where: {"email" : email, "password": password}
      }).then((user) => {
        if(user === null){
            return done(null, null, {message :"Wrong username or password."});
        }
        return done(null, user , {message:"User authenticated."});
      })
    }
  ));

}
