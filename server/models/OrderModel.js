const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  items: [String], 
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
