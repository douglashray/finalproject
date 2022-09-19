const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  
});

const MovieModel = mongoose.model('movie', movieSchema);

module.exports = {
  MovieModel,
  MovieSchema: movieSchema
};