'use strict';

const google = require('./googleindex')


const { hello } = require('./handler');

test('Create redirection body with authentication URL', (done) => {

  hello('null', 'null', function(err, resp) {
    expect(resp.statusCode).toBe(200);
    console.log(`body is ${resp.body}`)
    expect(resp.body).toBeDefined();
    done();
  })

});