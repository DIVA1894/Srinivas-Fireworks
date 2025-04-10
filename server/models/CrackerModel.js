const mongoose = require("mongoose");

const CrackerSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  crackerType: String,
});

module.exports = mongoose.model("Cracker", CrackerSchema);
