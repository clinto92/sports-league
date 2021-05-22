import React, { useEffect, useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { createTeamAction, getTeamsAction, updateTeamAction } from "../redux/actions/TeamAction";
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
    players:[],
  });
  const [createPlayersData, setCreatePlayersData] = useState({ players:[] });

  const dispatch = useDispatch();
  const classes = useStyles();

  dispatch(getTeamsAction());
  
  useEffect(()=> {
    dispatch(getTeamsAction())
  }, [createTeamData, createPlayersData, dispatch])
  
  const teamsData = useSelector(state => state.teams);

  const clear = () => {
    setCreateTeamData({ teamName: "" });
    setCreatePlayersData({ players: [""]});
  };
  const handlePlayersChange = (e) => {
    setCreatePlayersData({ ...createPlayersData, [e.target.name]: e.target.value });
  };

  const handleTeamSubmit = async (e) => {
    e.preventDefault();
    setCreateTeamData({ ...createTeamData, createTeamData })
    dispatch(createTeamAction({ ...createTeamData, createTeamData }));
    console.log(createTeamData);
    clear();
  };

  const handleKeyPress = (e, id) => {
    if (e.keyCode === 13) {
     
      dispatch(updateTeamAction(id,{...createPlayersData, createPlayersData}));
      clear();
    }
  };

  const handleDelete = (id) => {
    setCreatePlayersData({ ...createPlayersData, players: createPlayersData.players.filter((PlayerName) => PlayerName !== id) });
  };

  const savePlayers = (e, id) => {
    e.preventDefault();
    setCreatePlayersData({...createPlayersData, createPlayersData});
    dispatch(updateTeamAction( id, {...createPlayersData, createPlayersData}))
    clear();
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
              label="Title"
              fullWidth
              value={createTeamData.teamName}
              onChange={(e) =>
                setCreateTeamData({
                  ...createTeamData,
                  teamName: e.target.value,
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
        <Paper className={classes.margin} key={team._id}>
          <Accordion className={`${classes.padding} ${classes.margin}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column} key={team.teamName}>
              
                <Typography className={classes.heading}>{"Name Of Team  "}<ArrowForwardIcon /> {team.teamName}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {createTeamData.teamName}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
             
              <div className={classes.column} key={team.players}>
                <TextField
                  name="players"
                  variant="outlined"
                  label="Enter the player name"
                  value={createPlayersData.players}
                  fullWidth
                  onChange={handlePlayersChange}
                  onKeyDown={(e) => handleKeyPress(e, team._id)}
                />
                <Chip label={team.players} />
              
                <DeleteIcon fontSize="small" onClick={() => handleDelete(team._id)} />
                {team.players.map(p => 
                <Chip key={p._id} label={` # ${p}`} onDelete={() => {}} />
                )}
              </div>
              <div className={classes.column} />
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Select your destination of choice
                  <br />
                </Typography>
              </div>
            </AccordionDetails>
            <Divider />
            <AccordionActions>
              <Button size="small" onClick={clear} >Cancel</Button>
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
