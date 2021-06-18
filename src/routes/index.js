'use strict';

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  require('./healthCheck.js')(app);
  require('./getUsers.js')(app);
  require('./getHobbies.js')(app);
  require('./getListOfAgesOfUsersWith.js')(app);
};
