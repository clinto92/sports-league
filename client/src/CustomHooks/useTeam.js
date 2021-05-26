import { useEffect, useState } from "react";
import {
  createTeamAction,
  deleteSinglePlayerAction,
  deleteTeamAction,
  getTeamsAction,
  updateTeamAction,
} from "../redux/actions/TeamAction";
import { useDispatch, useSelector } from "react-redux";

export const useTeam = () => {
  const dispatch = useDispatch();
  // dispatch(getTeamsAction());
  const [createTeamData, setCreateTeamData] = useState({
    teamName: "",
    place: "",
    players: [],
  });
  const [createPlayersData, setCreatePlayersData] = useState({
    teamName: "",
    place: "",
  });
  const [createWholeTeam, setCreateWholeTeam] = useState({ players: [] });
  const [idDeleted, setIdDeleted] = useState("");

  useEffect(() => {
    dispatch(getTeamsAction());
  }, [ createWholeTeam, idDeleted, dispatch]);

  const { teams, isLoading } = useSelector((state) => state.teams);

  const clear = () => {
    setCreateTeamData({ teamName: "", place: "", players: [] });
    setCreatePlayersData({ teamName: "", place: "", players: [] });
  };

  const clearPlayers = () => {
    setCreateWholeTeam({ teamName: "", place: "", players: [] });
  };
  const handlePlayersChange = (e) => {
    setCreatePlayersData({
      ...createPlayersData,
      [e.target.name]: e.target.value,
    });
    console.log(createWholeTeam);
  };

  const handleTeamSubmit = async (e) => {
    e.preventDefault();
    // setCreateTeamData({ ...createTeamData, createTeamData })
    dispatch(createTeamAction(createTeamData));
    clear();
  };

  const handleKeyPress = (e, id) => {
    if (e.keyCode === 13) {
      setCreateWholeTeam({
        ...createWholeTeam,
        players: [...createWholeTeam.players, e.target.value],
      });
      dispatch(updateTeamAction(id, createWholeTeam));
      clear();
      console.log(createWholeTeam);
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    setIdDeleted(id);
    dispatch(deleteTeamAction(id));
    console.log(id, idDeleted);
  };

  const savePlayers = (e, id) => {
    e.preventDefault();
    // setCreatePlayersData({...createPlayersData, createPlayersData});
    dispatch(updateTeamAction(id, createWholeTeam, createPlayersData));
    clear();
    clearPlayers();
  };

  const handleSingleDelete = (e,id,index) => {
    e.preventDefault()
    dispatch(deleteSinglePlayerAction(id, index))
  }

  return {
    handleSingleDelete,
    createTeamData,
    setCreateTeamData,
    createPlayersData,
    teams,
    isLoading,
    clear,
    handlePlayersChange,
    handleTeamSubmit,
    handleKeyPress,
    handleDelete,
    savePlayers,
  };
};
