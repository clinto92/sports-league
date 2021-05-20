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

// team
router.post("/create-team", createTeam);
router.get("/teams-info", getTeam);
router.patch("/update-team/:id", updateTeam);
router.delete("/delete-team/:id", deleteTeam);
// player
// router.post("/create-player", createplayer);
router.get("/players-info", getPlayers);
router.patch("/update-player/:id", updatePlayer);
router.delete("/delete-player/:id", deletePlayer);

export default router;
