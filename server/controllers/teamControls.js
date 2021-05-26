import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import TeamModel from "../Models/teamModel.js";

export const createTeam = async (req, res, next) => {
  const post = req.body;

  const newPostMessage = new TeamModel({
    ...post,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  next();
};

export const getTeam = async (req, res, next) => {
  try {
    const teamInfo = await TeamModel.find();

    const log = res.status(200).json(teamInfo);
    console.log(log);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
  next();
};

export const getWhole = async (req, res, next) => {
  const { page } = req.query;

  try {
    const LIMIT = 4;
    const startIndex = (Number(page)- 1) * LIMIT;
    const total = await TeamModel.countDocuments({});
    const posts = await TeamModel.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);
    const log = res.status(200).json({data : posts, currentPage : Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    console.log(log);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
  next();
};
// edit below
export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
      const title = new RegExp(searchQuery, "i");

      const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

      res.json({ data: posts });
  } catch (error) {    
      res.status(404).json({ message: error.message });
  }
}
// update by search controllers above

export const updateTeam = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No teams with id: ${id}`);

  const updatedPost = {
    players: req.body.players,
    place: req.body.place,
    teamName: req.body.teamName,
  };

  await TeamModel.findByIdAndUpdate(id, updatedPost, { new: true });

  res.status(200).json(updatedPost);
  next();
};

export const deleteTeam = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No team with id: ${id}`);

  await TeamModel.findByIdAndRemove(id);
  res.json({ message: "Team deleted successfully." });
  next();
};

export const deletePlayer = async (req, res, next) => {
  const { id } = req.params;
  const { indexOf } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No team with id: ${id} and index of ${indexOf}`);

  await TeamModel.findByIdAndRemove(id);
  res.json({ message: "Player deleted successfully." });
  next();
};
export default router;
