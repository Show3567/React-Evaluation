'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
  console.log(request);
  const hobbyToLookup = request.query.hobby;
  const data = await mockDBCalls.getListOfAgesOfUsersWith(hobbyToLookup);
  return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
  app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
