import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamBySearchAction, getTeamsAction, updateTeamAction } from "../redux/actions/TeamAction";
import { useHistory } from "react-router-dom";


    
export const usePlayers = () => {
  const query = useQuery()
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery')
  const [ players, setPlayers] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const [teamDatabase, setTeamDatabase] = useState({
    teamName: "",
    place: "",
    players: [],
  });
  const [updated, setUpdated] = useState({ teamName: "", place: "" });
  const { teams, isLoading} = useSelector((state) => state.teams);
  console.log("dataBase - by useSelector", teams);
  const [search, setSearch] = useState("");

  setTeamDatabase(teams);
  console.log("teamDatabase - useState state log:", teamDatabase);

  useEffect(() => {
    dispatch(getTeamsAction());
  }, [dispatch]);

  const handlePlayersSubmit = (e, id) => {
    e.preventDefault();
    dispatch(updateTeamAction(updated));
  };

  const searchTeam = (e) => {
    e.preventDefault();
      if(search.trim().toLowerCase()){
        dispatch(getTeamBySearchAction())
      }else {
          history.push("/players")
      }
  }
  const handleKeyPressSearch = (e) => {
      if(e.keyCode === 13){
          searchTeam()
      }
  }
  
  return {
    teams,
    isLoading,
    page,
    searchTeam,
    handleKeyPressSearch,
    teamDatabase,
    handlePlayersSubmit,
    setSearch,
    search,
    updated,
    setUpdated,
  };
};
