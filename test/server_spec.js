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

});