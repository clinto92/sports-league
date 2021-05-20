import {
  FETCH_PLAYERS,
  DELETE_PLAYER,
  CREATE_PLAYER,
  UPDATE_PLAYER,
} from "../constants/actionTypes";

function players(players = [], action) {
  switch (action.type) {
    case FETCH_PLAYERS:
      return action.payload;
    case CREATE_PLAYER:
      return [...players, action.payload];
    case UPDATE_PLAYER:
      return players.map((child) =>
        child._id === action.payload._id ? action.payload : child
      );
    case DELETE_PLAYER:
      return players.filter((child) => child._id !== action.payload);
    default:
      return players;
  }
}

export default players;
