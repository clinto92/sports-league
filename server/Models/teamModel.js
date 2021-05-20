import mongoose from "mongoose";

const TeamSchema = mongoose.Schema({
  teamname: { type: String, required: true },
  players: [],
});

export default mongoose.model("TeamModel", TeamSchema);
