const users = require('client/routes/users.js');

module.exports = function(app) {
  app.post('/signup', users);
};