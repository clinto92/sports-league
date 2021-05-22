import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import TeamModel from "../Models/teamModel.js";

export const getPlayers = async (req, res, next) => {
  try {
    const teamInfo = await TeamModel.find();

    const log = res.status(200).json(teamInfo);
    console.log(log);
  } catch (error) {
    res.status(404).json(error);
  }
  next();
};

export const updatePlayer = async (req, res, next) => {
  const { id } = req.params;
  // const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = {
    teamName: req.body.teamName,
    place: req.body.place,
    players: req.body.players,
  };

  await TeamModel.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
  next();
};

export const deletePlayer = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No team with id: ${id}`);

  await TeamsModel.findByIdAndRemove(id);
  res.json({ message: "Team deleted successfully." });
  next();
};

export default router;
