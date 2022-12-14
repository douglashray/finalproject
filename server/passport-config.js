const passport = require('passport');
// const { initialize, authenticate } = require('passport');
const bcrypt = require('bcrypt');
const { User, validate } = require('./models/users');
const LocalStrategy = require('passport-local').Strategy;

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email)
    if (user == null) {
      return done(null, false, { message: 'No user found' })
    }

    try {
      if (await bcrypt.compare(password. user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Incorrect Password' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => { 
    return done(null, getUserById(id))
  })
}

module.exports = initialize;