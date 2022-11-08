const express = require('express');
const config = require('config');
const http = require('http');
const bodyParser = require('body-parser');
// const router = require("express").Router();
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
// const router = require('./router');
const cors = require('cors');
const Joi = require('joi');
const app = express();

if (!config.get('PrivateKey')) {
  console.error('FATAL ERROR: PrivateKey is not defined.');
  process.exit(1);
}

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// app.use(bodyParser.json());

// Database
// mongoose.connect(keys.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(
  'mongodb://localhost/finalproject',
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
