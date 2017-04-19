var myApp = require('../server.js');
var request = require('supertest')(myApp);

describe('Buzz-Word-Bingo', function() {

  it('Returns index.html when requesting "GET /"', function(done) {
    request
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=UTF-8', done);
  });

  it('Returns 404.html when requesting an invalid page', function(done) {
    request
      .get('/thisisaninvalidpagethatprobablywouldneverexistinanycontextsonthisapplicationandshouldnotreflectarealfilename.html')
      .expect(404)
      .expect('Content-Type', 'text/html; charset=UTF-8', done);
  });

  it('Returns a JSON string when requesting "GET /buzzwords"', function(done) {
    request
      .get('/buzzwords')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8', done);
  });

  it('Returns a JSON string when POSTing a new buzzword', function(done) {
    request
      .post('/buzzwords')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8', done);
  });

  it('Returns a JSON string when PUTting a buzzword', function(done) {
    request
      .put('/buzzwords')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8', done);
  });

  it('Returns a JSON string when DELETEing a buzzword', function(done) {
    request
      .delete('/buzzwords')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8', done);
  });

  it('Returns a JSON string when resetting', function(done) {
    request
      .post('/buzzwords')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8', done);
  });

});