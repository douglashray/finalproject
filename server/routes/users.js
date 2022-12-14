const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate } = require('../models/users');
const express = require('express');
const router = express.Router();
const Joi = require('joi');


router.post ('/', async (req, res) => {
  const {error} = User.validate(req.body);
  

  console.log('error' + error);
  
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send('User exists');
  } else {
    user = new User({
      email: req.body.email,
      password: req.body.password
    });
    const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    // res.send(user);
    const token = jwt.sign({ _id: user._id }, config.get('PrivateKey'));
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'email']));
  }
});


module.exports = router;