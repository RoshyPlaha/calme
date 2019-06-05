'use strict';

module.exports.hello = async (event, context, callback) => {

  const response = {
    statusCode = 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully and is authenticated!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
