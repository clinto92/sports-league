import cors from "cors";
import express from "express";

const router = express.Router();
import {
  createTeam,
  getTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/teamControls.js";
import {
  getPlayers,
  updatePlayer,
  deletePlayer,
} from "../controllers/playersControl.js";
const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
}

// team
router.post("/create-team", cors(corsOptions), createTeam);
router.get("/teams-info", cors(corsOptions), getTeam);
router.patch("/update-team/:id", cors(corsOptions), updateTeam);
router.delete("/delete-team/:id", cors(corsOptions), deleteTeam);
// player
// router.post("/create-player", createplayer);
router.get("/players-info", getPlayers);
router.patch("/update-player/:id", updatePlayer);
router.delete("/delete-player/:id", deletePlayer);

export default router;
