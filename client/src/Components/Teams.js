import React, { useEffect, useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { createTeamAction, deleteTeamAction, getTeamsAction, updateTeamAction } from "../redux/actions/TeamAction";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  padding: {
    padding: "30px",
  },
  margin: {
    margin: "40px",
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  button: {
    display: "inlineBlock",
    margin: "20px",
    width: "60%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  chips:{
    margin: "5px",
    display: "block",
    width: "auto",
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default function Teams() {
  const [createTeamData, setCreateTeamData] = useState({
    teamName: "",
    place: "",
    players:[],
  });
  const [createPlayersData, setCreatePlayersData] = useState({ teamName:"", place: "" });
  const [createWholeTeam, setCreateWholeTeam] = useState({ players: []})
  const [idDeleted, setIdDeleted] = useState("");

  const dispatch = useDispatch();
  const classes = useStyles();

  dispatch(getTeamsAction());
  
  useEffect(()=> {
    dispatch(getTeamsAction())
  }, [createTeamData,createWholeTeam,idDeleted, dispatch])
  
  const teamsData = useSelector(state => state.teams);

  const clear = () => {
    setCreateTeamData({ teamName:"", place: "", players: [] });
    setCreatePlayersData({teamName:"", place: "", players: []});
  };

  const clearPlayers = () => {
    setCreateWholeTeam({ teamName:"", place: "", players: [] });
  }
  const handlePlayersChange = (e) => {
    setCreatePlayersData({ ...createPlayersData, [e.target.name]: e.target.value });
    // setCreateWholeTeam({ ...createWholeTeam, [e.target.name]: e.target.value });
    // setCreateWholeTeam({ ...createWholeTeam, players: [...createWholeTeam.players, e.target.value] });
    // setCreateWholeTeam(createPlayersData);
    console.log(createWholeTeam);
  };

  

  const handleTeamSubmit = async (e) => {
    e.preventDefault();
    // setCreateTeamData({ ...createTeamData, createTeamData })
    dispatch(createTeamAction( createTeamData ));
    clear();
  };

  const handleKeyPress = (e, id) => {
    if (e.keyCode === 13) {
     
      setCreateWholeTeam({ ...createWholeTeam, players: [...createWholeTeam.players, e.target.value] });
      dispatch(updateTeamAction(id, createWholeTeam));
      clear();
      console.log(createWholeTeam)
    }
  };

  const handleDelete = async(e, id) => {
    e.preventDefault()
    setIdDeleted(id);
   dispatch(deleteTeamAction(id)); 
   console.log(id, idDeleted)
  };

  const savePlayers = (e, id) => {
    e.preventDefault();
    // setCreatePlayersData({...createPlayersData, createPlayersData});
    dispatch(updateTeamAction( id, createWholeTeam, createPlayersData))
    clear();
    clearPlayers();
  }
  return (
    <div>
      <Typography variant="h3" className={classes.padding}>
        My Team
      </Typography>
      <div className={classes.root}>
        <Paper className={classes.margin}>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleTeamSubmit}
          >
            <Typography variant="h6" className={classes.padding}>
              Create a new team 
            </Typography>
            <TextField
              name="title"
              variant="outlined"
              label="Enter Team Title"
              fullWidth
              value={createTeamData.teamName}
              onChange={(e) =>
                setCreateTeamData({
                  ...createTeamData,
                  teamName: e.target.value,
                })
              }
            />
            <TextField
              name="place"
              variant="outlined"
              label="Enter Place Of Origin"
              fullWidth
              value={createTeamData.place}
              onChange={(e) =>
                setCreateTeamData({
                  ...createTeamData,
                  place: e.target.value,
                })
              }
              
            />

            <Button
              className={`${classes.button}`}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
              onClick={handleTeamSubmit}
            >
              Submit
            </Button>
            <Button
              className={`${classes.button}`}
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
            >
              Clear
            </Button>
          </form>
        </Paper>
       {teamsData.map(team => 
        <Paper className={classes.margin} >
          <Accordion className={`${classes.padding} ${classes.margin}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column} >
              
                <Typography key={team.teamName} className={classes.heading}>{"Name Of Team  "}<ArrowForwardIcon /> {team.teamName}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading} key={team.place}>
                {"Origin "}<ArrowForwardIcon /> {team.place}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
             
              <div className={classes.column} key={team.teamName} >
                <TextField
                  name="players"
                  variant="outlined"
                  label="Enter the player name"
                  value={createPlayersData.players}
                  fullWidth
                  onChange={(e)=> handlePlayersChange(e)}
                  onKeyDown={(e) => handleKeyPress(e, team._id)}
                /> 
                

                {team.players.map((p,index) => 
                <Chip key={p.index} label={`${index + 1} # ${p}`} onDelete={() => {}} className={classes.chips} />
                )}
              </div>
              <div className={classes.column} />
              <div className={`${classes.column} ${classes.helper}`}>
                <Typography variant="caption">
                  Update Team ...
                  <TextField  label="Title of team" name="teamName" onChange={(e)=> handlePlayersChange(e)} value={createPlayersData.teamName} />
                  <TextField  label="Origin" name="place" onChange={(e)=> handlePlayersChange(e)} value={createPlayersData.place} />
                  <br />
                </Typography>
              </div>
            </AccordionDetails>
            <Divider />
            <AccordionActions key={team.players}>
              <Button > Delete Team<DeleteIcon fontSize="large" onClick={(e)=> handleDelete(e, team._id)} /></Button>
              <Button size="small" onClick={clear} >Clear</Button>
              <Button size="small" color="primary" type="submit" onClick={(e) => savePlayers(e, team._id)} >
                Save
              </Button>
            </AccordionActions>
          </Accordion>
        </Paper>
        )}
      </div>
    </div>
  );
}
