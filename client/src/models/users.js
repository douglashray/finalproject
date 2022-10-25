const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Orders = require('./orders');


const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  watchlist: [{ type: Orders.OrderSchema }]
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;