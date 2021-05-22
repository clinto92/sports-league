import { FETCH_TEAM, DELETE_TEAM, CREATE_TEAM, UPDATE_TEAM } from "../constants/actionTypes";

function teams(teams = [], action) {
  switch (action.type) {
    case FETCH_TEAM:
      return action.payload;
    case CREATE_TEAM:
      return [...teams, action.payload];
    case UPDATE_TEAM:
      return teams.map((child) =>
        child._id === action.payload._id ? [...teams, action.payload] : child
      );
    case DELETE_TEAM:
      return teams.filter((team) => team._id !== action.payload);
    default:
      return teams;
  }
}

export default teams;
