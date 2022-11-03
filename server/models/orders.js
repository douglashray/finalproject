const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  id: Number,
  awayTeam: String,
  date: String,
  awayLogo: String
});

const flightSchema = new Schema({
  id: Number,
  airline: String,
  departureDate: String,
  returnDate: String,
  price: Number
});

const hotelSchema = new Schema ({
  id: Number,
  name: String,
  price: Number,
  checkIn: String,
  checkOut: String
});


const orderSchema = new Schema({
    game: [{ type: gameSchema }],
    flight: [{ type: flightSchema }],
    hotel: [{ type: hotelSchema }]
});

const OrderModel = mongoose.model('order', orderSchema);

module.exports = {
  OrderModel,
  OrderSchema: orderSchema
};