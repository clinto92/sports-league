import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:2000" });

// Players
export const createPlayer = (createPlayerData) =>
  API.post("/create-player", createPlayerData);
export const fetchPlayers = () => API.get("/players-info");
export const deletePlayer = (id) => API.delete(`/delete-player/${id}`);
export const updatePlayers = (id, updatedPlayerForm) =>
  API.patch(`/update-team/${id}`, updatedPlayerForm);
// Team
export const createTeam = (createTeamData) =>
  API.post("/create-team", createTeamData);
export const fetchTeams = () => API.get("/teams-info");
export const deleteTeam = (id) => API.delete(`/delete-team/${id}`);
export const updateTeam = (id, createPlayersData) => API.patch(`/update-team/${id}`, createPlayersData);
