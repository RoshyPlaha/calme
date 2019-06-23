'use strict';

const google = require('./googleindex')

const hello = async (event, context, callback) => {

  let response = {
      "statusCode": 200,
      "headers": {
        "Access-Control-Allow-Origin": "*"
      },
      "isBase64Encoded": false
  };

  const data = await google.alternateStartIt();
  console.log('here is the data ' + data);
  response.body = JSON.stringify(data);

  callback(null, response);
}

module.exports = {
  hello
}