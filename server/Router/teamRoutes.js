import cors from "cors";
import express from "express";

const router = express.Router();
import {
  createTeam,
  getTeam,
  updateTeam,
  deleteTeam,
  deletePlayer,
} from "../controllers/teamControls.js";

const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
}

router.post("/create-team", cors(corsOptions), createTeam);
router.get("/teams-info", cors(corsOptions), getTeam);
router.patch("/update-team/:id", cors(corsOptions), updateTeam);
router.delete("/delete-team/:id", cors(corsOptions), deleteTeam);
router.delete("/delete-player/:id", cors(corsOptions), deletePlayer);
// export const deletePlayerAPI = (id, index) => API.delete(`/delete-player/${id}?indexOf=${index}`);
// export const fetchWhole = (page) => API.get(`/teams-info?page=${page}`);


export default router;
