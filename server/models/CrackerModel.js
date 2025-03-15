import mongoose from "mongoose";
const CrackerSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});
export default mongoose.model("Cracker", CrackerSchema);
