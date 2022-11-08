const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../models/users');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const salt = await bcrypt.genSalt(15);

  const { error } = User.validate(req.body);
  if(error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.email });

  if(!user) {
    return res.status(400).send('Invalid email');
  }

  let passwordHash = await bcrypt.hash(user.password, salt);

  const validPassword = await bcrypt.compare(req.body.password, passwordHash);

  if(!validPassword) {
    return res.status(400).send('Invalid password');
  }

  const token = jwt.sign({ _id: user._id }, config.get('PrivateKey'));
  res.send(token);
});

  const schema = Joi.object({
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
    })


  schema.validate(User);

module.exports = router;