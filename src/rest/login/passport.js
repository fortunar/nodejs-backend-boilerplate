import facebook from 'passport-facebook'
import LocalStrategy from 'passport-local'
import models from '../../../models'
import config from './../../../config/config.json'

const conf = config[process.env.NODE_ENV || 'development']

export default function (passport) {

  passport.use(new facebook.Strategy({
    clientID        : config.login.facebookAuth.clientID,
    clientSecret    : config.login.facebookAuth.clientSecret,
    callbackURL     : config.login.facebookAuth.callbackURL,
    profileFields: ['id', 'displayName', 'name', 'emails']
  }, function(token, refreshToken, profile, done) {
    console.log("TLE");
    // models.users.findOne({ 'where' : {'id_fb' : profile.id }}).then(function(user) {
      console.log("BRAVO");

      // if(!user) {
      //   done(err);
      // }
      // if(user) {
      //   return done(err, user);
      // } else {
        console.log(profile);
        models.users.sync().then(function () {
          // Table created
          return models.users.create({
            name: profile.name.givenName,
            surname: profile.name.familyName,
            id_fb: 123,
            email: profile.emails[0].value,
            mobile_verified: false
          })
        }).then(function(user) {
          console.log(user);
          done(null, user);
        });




      // }
    // });
    console.log("LEGENDA");

  }));


  passport.use(new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
      session: false
    },
    function(req, username, password, done) {
      models.users.findOne({
        where: {"email" : username, "password": password}
      }).then(function(user) {
        if(user === null){
            return done(null, null, {message :"Wrong username or password."});
        }
        return done(null, user , {message:"User authenticated."});
      })
    }
  ));



}
