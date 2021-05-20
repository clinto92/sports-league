import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { createTeamAction, getTeamsAction } from "../redux/actions/TeamAction";
import { useDispatch, useSelector } from "react-redux";

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
    padding: "20px",
  },
  marging: {
    margin: "20px",
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
  const dispatch = useDispatch();
  const classes = useStyles();
  dispatch(getTeamsAction());
  const T = useSelector((state) => state.Teams);
  const [createTeamData, setCreateTeamData] = useState({
    teamName: "",
    players: [""],
  });

  const clear = () => {
    setCreateTeamData({
      teamName: "",
      players: [""],
    });
  };

  const handleDelete = (e) => {
    console.log("I got deleted");
  };
  const handlePlayersChange = (e) => {
    setCreateTeamData({ ...createTeamData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createTeamAction({ ...createTeamData, createTeamData }));
    console.log(createTeamData);
    clear();
  };

  return (
    <div>
      <Typography variant="h3" className={classes.padding}>
        My Team
      </Typography>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography variant="h6" className={classes.padding}>
              Create new team for sports league
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
              className={`${classes.buttonSubmit}`}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
              onClick={() => setCreateTeamData({ createTeamData })}
            >
              Submit
            </Button>
            <Button
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
        <Paper>
          <Accordion className={`${classes.padding} ${classes.margin}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.heading}></Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Name of team
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <div className={classes.column} />
              <div className={classes.column}>
                <TextField
                  name="players"
                  variant="outlined"
                  label="Enter the player name"
                  fullWidth
                  onChange={handlePlayersChange}
                />

                <Chip label="Barbados" onDelete={handleDelete} />

                <Chip label="Barbados" onDelete={() => {}} />
              </div>
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Select your destination of choice
                  <br />
                </Typography>
              </div>
            </AccordionDetails>
            <Divider />
            <AccordionActions>
              <Button size="small">Cancel</Button>
              <Button size="small" color="primary">
                Save
              </Button>
            </AccordionActions>
          </Accordion>
        </Paper>
      </div>
    </div>
  );
}
