import App from './../App'
import {expect} from 'chai';
import request from 'supertest'


describe('auth', () => {

  it('rejects unauthorized requests', function(done){
    request(App)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(401)
      .end(function(err, res){
        if (err) return done(err);
        done();
      });
  });

  // it('responds to authorized request', function(done){
  //   var token;
  //   //first perform login
  //   request(App)
  //     .get('/login/local')
  //     .set('Accept', 'application/json')
  //     .send({username: })
  //     .expect(200)
  //     .end(function(err, res){
  //       token = res.body.token;
  //       if (err) {
  //         return done(err)
  //         // if successful test the protected endpoint
  //       }else{
  //         request(App)
  //           .get('/users')
  //           .set('token' , token)
  //           .expect(200)
  //           .end(function(err, res){
  //             if (err) return done(err);
  //             done();
  //           });
  //       }
  //     });
  //
  // });

});
