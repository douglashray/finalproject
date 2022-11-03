const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
// const router = require("express").Router();
const mongoose = require('mongoose');
const users = require('./routes/users');
// const router = require('./router');
const cors = require('cors');
const Joi = require('joi');

const app = express();
app.use(express.json());

app.use(cors());

app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json());

// Database
// mongoose.connect(keys.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.get('/', (req, res) => {
  res.send('change');
});

const games = [{
  id: 1,
  title: 'Mario'
},
{
  id: 2,
  title: 'Zelda'
},
{
  id: 3,
  title: 'Donkey Kong'
}
];

app.get('/api/games', (req, res) => {
  res.send(['Mario', 'Zelda', 'Donkey Kong']);
});

// add a game
app.post('/api/games', (req, res) => {
  // const schema = {
  //   title: Joi.string().min(2).required()
  // };
  
  // const result = schema.validate(req.body);

  // if (result.error) {
  //   res.status(400).send(result.error)
  // }

  const game = {
      id: games.length + 1,
      title: req.body.title
  }

  games.push(game);
  res.send(game);
});

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


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// const mainRoutes = require(".client/src/routes/main");

// app.use(mainRoutes);


// Server
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log(`listening on port... ${port}`);
// app.listen(8000, () => {
//   console.log("Node.js listening on port " + 8000);
// });
// 
