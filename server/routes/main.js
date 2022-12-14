const router = require("express").Router();
const { User, validate } = require('../models/users');
const express = require('express');
const teams = require("../models/teams");
const users = require("../models/users");

// router.get("/team", (req, res, next) => {
//   const search = req.query.search;
//   console.log('req' + req);
//   console.log('route search' + search);

//   if(!search || search === undefined) {
//     teams.find({search: { "$regex": search}})
//     .exec((err, teams) => {
//       teams.count().exec((err, count) => {
//         if(err) return next(err);

//         res.send(teams);
//       });
//     });
//   } else {
//     teams.find({})
//     .exec((err, teams) => {
//       if(err) return next(err);

//         res.send(teams);
//     });
//   }
// });

// router.post ('/signup', async (req, res) => {
//   const {error} = validate(req.body);
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }

//   let user = await UserModel.findOne({ email: req.body.email });
//   if (user) {
//     return res.status(400).send('User exists');
//   } else {
//     user = new UserModel({
//       email: req.body.email,
//       password: req.body.password
//     });
//     await user.save();
//     res.send(user);
//   }
// });

router.post ('/login', async (req, res) => {
  res.send("login");
});


module.exports = router;