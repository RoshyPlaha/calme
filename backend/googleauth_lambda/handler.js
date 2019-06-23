'use strict';

const google = require('./googleindex')

const responseStruct = () => {
  return {
    "statusCode": 200,
    "headers": {
      "Access-Control-Allow-Origin": "*"
    },
    "isBase64Encoded": false
  };
}

const requestAuthUrl = async (event, context, callback) => {

  const response = responseStruct();
  const data = await google.alternateStartIt();
  console.log('here is the data ' + data);
  response.body = JSON.stringify(data);

  callback(null, response);
}

const processAuthToken = async (event, context, callback) => {

  console.log(`here are the events ${JSON.stringify(event.body)}`);

  callback(null, responseStruct());
}

module.exports = {
  requestAuthUrl,
  processAuthToken
}