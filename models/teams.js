const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema ({
  id: Number,
  name: String,
  city: String,
  logo: String,
  search: String
});


module.exports = mongoose.model("Team", TeamSchema);