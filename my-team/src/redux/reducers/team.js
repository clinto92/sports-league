import { FETCH_TEAM, DELETE_TEAM, CREATE_TEAM } from "../constants/actionTypes";

function teams(teams = [], action) {
  switch (action.type) {
    case FETCH_TEAM:
      return action.payload;
    case CREATE_TEAM:
      return [...teams, action.payload];
    case DELETE_TEAM:
      return teams.filter((team) => team._id !== action.payload);
    default:
      return teams;
  }
}

export default teams;
