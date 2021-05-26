import React from "react";

import { TextField, Button, Typography, Paper } from "@material-ui/core";

import { useStyles } from "../CustomHooks/useStyles";
import { useTeam } from "../CustomHooks/useTeam";
import TeamAction from "./Child_Components/TeamAction";

export default function Teams() {
  const { useStylesTeam } = useStyles();
  const classes = useStylesTeam();
  const { createTeamData, setCreateTeamData, handleTeamSubmit, clear } =
    useTeam();

  return (
    <div>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.players}>
          <Typography variant="h3" className={classes.padding}>
            My Team
          </Typography>
        </Paper>

        <Paper className={classes.margin}>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleTeamSubmit}>
            <Typography variant="h6" className={classes.padding}>
              Create a new team
            </Typography>
            <TextField
              className={classes.input}
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
              className={classes.input}
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
              onClick={handleTeamSubmit}>
              Submit
            </Button>
            <Button
              className={`${classes.button}`}
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth>
              Clear
            </Button>
          </form>
        </Paper>
      </div>
      <TeamAction />
    </div>
  );
}
