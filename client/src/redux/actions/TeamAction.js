import {
  FETCH_TEAM,
  CREATE_TEAM,
  UPDATE_TEAM,
  DELETE_TEAM,
  START_LOADING,
  END_LOADING,
  FETCH_BY_SEARCH,
  FETCH_ALL,
  DELETE_PLAYER
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const createTeamAction = (createTeamData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createTeam(createTeamData);
    dispatch({ type: CREATE_TEAM, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getTeamBySearchAction = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchTeamBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getTeamsAction = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchTeams();
    dispatch({ type: FETCH_TEAM, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getWholeAction = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchWhole(page);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTeamAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    await api.deleteTeam(id);
    dispatch({ type: DELETE_TEAM, payload: id });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const deleteSinglePlayerAction = (id, index) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.deletePlayerAPI(id, index);
    dispatch({ type: DELETE_PLAYER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateTeamAction =
  (id, createWholeTeam, createPlayersData) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.updatePlayers(
        id,
        createWholeTeam,
        createPlayersData
      );
      dispatch({ type: UPDATE_TEAM, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
