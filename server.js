const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
// const router = require('./router');
const mongoose = require('mongoose');
// const cors = require('cors');



// Database
// mongoose.connect(keys.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(
  'mongodb://127.0.0.1/peopleDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log('mongdb is connected');
  }
)

const app = express();

// app.use(cors());

// // app.use(bodyParser.urlencoded({ extended: false }));

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

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const mainRoutes = require("./routes/main");

app.use(mainRoutes);


// Server
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log('listening on ' + port);
