import {
  FETCH_TEAM,
  CREATE_TEAM,
  UPDATE_TEAM,
  DELETE_TEAM,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const createTeamAction = (createTeamData) => async (dispatch) => {
  try {
    const { data } = await api.createTeam(createTeamData);
    dispatch({ type: CREATE_TEAM, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getTeamsAction = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTeams();
    dispatch({ type: FETCH_TEAM, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTeamAction = (id) => async (dispatch) => {
  try {
    await await api.deleteTeam(id);
    dispatch({ type: DELETE_TEAM, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateTeamAction = (id, createPlayersData) => async (dispatch) => {
  try {
    const { data } = await api.updatePlayers(id, createPlayersData);
    dispatch({ type: UPDATE_TEAM, payload: data });
  } catch (error) {
    console.log(error);
  }
};
