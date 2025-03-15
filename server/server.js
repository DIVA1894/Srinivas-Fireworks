require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Order Schema
const OrderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  items: [String],
  date: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" },
});

const Order = mongoose.model("Order", OrderSchema);
const CrackerSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String, // URL of cracker image
  });
  
  const Cracker = mongoose.model("Cracker", CrackerSchema);
  
// Admin Schema
const AdminSchema = new mongoose.Schema({
  email: String,
  phone: String,
  password: String,
});

const Admin = mongoose.model("Admin", AdminSchema);

// 📌 Route to place an order
app.post("/place-order", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json({ message: "Order placed successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to place order" });
  }
});

// 📌 Route to fetch all orders
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// 📌 Route to update order status (Admin Only)
app.put("/update-status/:id", async (req, res) => {
  try {
    await Order.findByIdAndUpdate(req.params.id, { status: "Confirmed" });
    res.json({ message: "Order confirmed" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update order" });
  }
});

// 📌 Admin Registration (One-time setup)
app.post("/register-admin", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newAdmin = new Admin({ email: req.body.email, phone: req.body.phone, password: hashedPassword });
    await newAdmin.save();
    res.json({ message: "Admin registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to register admin" });
  }
});

// 📌 Admin Login
app.post("/admin-login", async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin || !(await bcrypt.compare(req.body.password, admin.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: admin._id }, "secretKey", { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});
app.get("/crackers", async (req, res) => {
    try {
      const crackers = await Cracker.find();
      res.json(crackers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch crackers" });
    }
  });
  
app.listen(5000, () => console.log("Server running on port 5000"));
