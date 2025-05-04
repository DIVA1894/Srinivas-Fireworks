// models/OrderModel.js
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
      total: Number,
    },
  ],
  paymentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
    required: false,
  },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
