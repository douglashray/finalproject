const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Orders = require('./orders');
const Joi = require('joi');


const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, },
  password: { type: String, required: true, },
  // orders: [{ type: Orders.OrderSchema }]
}));



const validateUser = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
    })

validateUser.validate(User);

// const UserModel = mongoose.model('users', UserSchema);

// module.exports = UserModel;
exports.User = User;
exports.validate = validateUser;