const Order = require("../models/OrderModel");

const placeOrder = async (req, res) => {
  try {
    const { name, phone, email, address, items } = req.body;

    if (!name || !phone || !address || !items || items.length === 0) {
      return res.status(400).json({ message: "Missing required order fields" });
    }

    const order = new Order({
      name,
      phone,
      email,
      address,
      items,
    });

    const savedOrder = await order.save();
    res.status(201).json({ message: "Order created", order: savedOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  placeOrder,
};
