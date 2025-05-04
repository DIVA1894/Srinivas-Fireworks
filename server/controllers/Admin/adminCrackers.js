// controllers/admin.js
const Cracker = require("../../models/CrackerModel");

const getAllCrackers = async (req, res) => {
  try {
    const crackers = await Cracker.find();
    const grouped = {};
    crackers.forEach((cracker) => {
      if (!grouped[cracker.crackerType]) {
        grouped[cracker.crackerType] = [];
      }
      grouped[cracker.crackerType].push(cracker);
    });

    res.status(200).json(grouped);
  } catch (err) {
    res.status(500).json({ message: "Error fetching crackers", error: err });
  }
};

module.exports = {
  getAllCrackers,
};
