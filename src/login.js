
import LocalStrategy from 'passport-local'
import models from './../models'

export default function(passport){
  passport.use(new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
      session: false
    },
    function(req, username, password, done) {
      console.log("auth callback");
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
