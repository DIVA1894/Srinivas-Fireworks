import express from "express";
import Cracker from "../models/CrackerModel.js"; // Model
const router = express.Router();

// Get all crackers from database
router.get("/", async (req, res) => {
  try {
    const crackers = await Cracker.find();
    res.json(crackers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
