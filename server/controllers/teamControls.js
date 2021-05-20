import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import TeamModel from "../Models/teamModel.js";

export const createTeam = async (req, res) => {
  const form = {
    teamname: req.body.teamname,
    players: [req.body.players],
  };
  console.log(form);
  const Team = new TeamModel(form);

  try {
    const result = await Team.save();

    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ error });
  }
};

export const getTeam = async (req, res, next) => {
  try {
    const teamInfo = await TeamModel.find();

    const log = res.status(200).json(teamInfo);
    console.log(log);
  } catch (error) {
    res.status(404).json(error);
  }
  next();
};

export const updateTeam = async (req, res, next) => {
  const { id } = req.params;
  // const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = {
    teamname: req.body.teamname,
    players: [req.body.players],
  };

  await TeamModel.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
  next();
};

export const deleteTeam = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await TeamsModel.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully." });
  next();
};

export default router;
