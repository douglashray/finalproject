if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const config = require('config');
const http = require('http');
const bodyParser = require('body-parser');
// const router = require("express").Router();
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const login = require('./routes/main');
const { User, validate } = require('./models/users');
const initializePassport = require('./passport-config');
// const router = require('./router');
const cors = require('cors');
const Joi = require('joi');
const passport = require('passport');
const app = express();
const flash = require('express-flash');
const session = require('express-session');

if (!config.get('PrivateKey')) {
  console.error('FATAL ERROR: PrivateKey is not defined.');
  process.exit(1);
}

// let user = await User.findOne({ email: req.body.email });
// let id = await User.findOne({ id: req.body.id })


initializePassport(passport, 
  email => users.find(user => user.email === email),
  // user,
  id => users.find(user => user.id === id)
  // id
)

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())



// app.use(bodyParser.json());

// Database
// mongoose.connect(keys.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log('mongodb is connected');
  }
)

app.use('/api/users', users);
app.use('/api/auth', auth);
app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));


// app.use(bodyParser.urlencoded({ extended: false }));

// router(app);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// const mainRoutes = require(".client/src/routes/main");

// app.use(mainRoutes);


// Server
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log(`listening on port...${port}`);
// app.listen(8000, () => {
//   console.log("Node.js listening on port " + 8000);
// });
// 
