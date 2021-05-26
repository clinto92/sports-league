import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:2000" });

// Team
export const createTeam = (createTeamData) =>
  API.post("/create-team", createTeamData);
export const fetchTeams = () => API.get("/teams-info");
export const fetchWhole = (page) => API.get(`/teams-info?page=${page}`);
export const deleteTeam = (id) => API.delete(`/delete-team/${id}`);
export const deletePlayerAPI = (id, index) => API.delete(`/delete-player/${id}?indexOf=${index}`);
export const updatePlayers = (id, createWholeTeam, createPlayersData) =>
  API.patch(`/update-team/${id}`, createWholeTeam, createPlayersData);
export const fetchTeamBySearch = (searchQuery) =>
  API.get(
    `/team/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );

// https://sports-league-server.herokuapp.com

