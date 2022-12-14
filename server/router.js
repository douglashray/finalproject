const users = require('/routes/users.js');
const login = require('/routes/main.js')

module.exports = function(app) {
  app.post('/signup', users);
  app.post('/login', login);
};