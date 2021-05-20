import {
  CREATE_PLAYER,
  UPDATE_PLAYER,
  DELETE_PLAYER,
  FETCH_PLAYERS,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const createPlayerAction = (createPlayerData) => async (dispatch) => {
  try {
    const { data } = await api.createPlayer(createPlayerData);
    dispatch({ type: CREATE_PLAYER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPlayersAction = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPlayers();
    dispatch({ type: FETCH_PLAYERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePlayerAction = (id) => async (dispatch) => {
  try {
    await await api.deletePlayer(id);
    dispatch({ type: DELETE_PLAYER, payload: id });
  } catch (error) {
    console.log(error);
  }
};
// alloted actions in above

export const updatePlayerAction =
  (id, updatedPlayerForm) => async (dispatch) => {
    try {
      const { data } = await api.updatePlayers(id, updatedPlayerForm);
      dispatch({ type: UPDATE_PLAYER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
