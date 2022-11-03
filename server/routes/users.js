const { User, validate } = require('../models/users');
const express = require('express');
const router = express.Router();
const Joi = require('joi');

router.post ('/', async (req, res) => {
  const {error} = User.validate(req.body);
  
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
    await user.save();
    res.send(user);
  }
});


module.exports = router;