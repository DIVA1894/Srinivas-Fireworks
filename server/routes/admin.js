// routes/crackerRoutes.js
const express = require("express");
const { getAllCrackers } = require("../controllers/Admin/adminCrackers");
const { getAllOrders } = require('../controllers/Admin/adminOrders');

const router = express.Router();

router.get("/crackers", getAllCrackers);
router.get('/order', getAllOrders);

module.exports = router;
