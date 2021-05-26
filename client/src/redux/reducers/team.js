import { FETCH_TEAM, DELETE_TEAM, CREATE_TEAM, UPDATE_TEAM, START_LOADING, END_LOADING, FETCH_BY_SEARCH, FETCH_ALL, DELETE_PLAYER } from "../constants/actionTypes";

export default function teams(state = { isLoading : true, teams: []}, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading : true};
    case END_LOADING:
      return { ...state, isLoading : false};
    case FETCH_ALL:
      return { 
         ...state,
         teams : action.payload.data,
         currentPage: action.payload.currentPage,
         numberOfPages : action.payload.numberOfPages
         };
    case FETCH_TEAM:
      return { ...state, teams : action.payload.data };
    case CREATE_TEAM:
      return {...state, teams: [...state.teams, action.payload] };
    case UPDATE_TEAM:
      return { ...state, teams: state.teams.map((child) =>
        child._id === action.payload._id ? [...state.teams, action.payload] : child
      )};
    case DELETE_TEAM:
      return {...state, teams: state.teams.filter((team) => team._id !== action.payload)};
    case DELETE_PLAYER:
      return {...state, teams: state.teams.map(team => team._id === action.payload._id).filter((teamData) => teamData.players.index !== action.payload.index)};
    case FETCH_BY_SEARCH:
      return { ...state, teams: action.payload };
    default:
      return state;
  }
}

 
    
