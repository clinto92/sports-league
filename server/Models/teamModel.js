import mongoose from "mongoose";

const TeamSchema = mongoose.Schema({
  teamName: { type: String, required: true },
  players: [String],
});

export default mongoose.model("TeamModel", TeamSchema);
