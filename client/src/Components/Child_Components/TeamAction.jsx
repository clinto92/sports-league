import React from "react";
import { useTeam } from "../../CustomHooks/useTeam";
import DeleteIcon from "@material-ui/icons/Delete";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { useStyles } from "../../CustomHooks/useStyles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

export default function TeamAction() {
  const { useStylesTeam } = useStyles();
  const classes = useStylesTeam();
  const {
    createPlayersData,
    teams,
    isLoading,
    handlePlayersChange,
    handleKeyPress,
    handleDelete,
    savePlayers,
    clear,
    handleSingleDelete,
    
  } = useTeam();

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {!teams.length && !isLoading ? (
            "No team formulated yet! Please add a title and origin for pro-creating your wonderful team! "
          ) : (
            <>
              {teams.map((team) => (
                <div key={team._id}>
                <Link to={`/team/${team._id}`} className={classes.link}>
                  <Paper className={classes.margin}>
                    <Accordion
                      className={`${classes.padding} ${classes.margin}`}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header">
                        <div className={classes.column} key={team.teamName}>
                          <Typography
                            
                            className={classes.heading}>
                            {"Name Of Team  "}
                            <ArrowForwardIcon /> {team.teamName}
                          </Typography>
                        </div>
                        <div className={classes.column} key={team.place}>
                          <Typography
                            className={classes.secondaryHeading}
                            >
                            {"Origin "}
                            <ArrowForwardIcon /> {team.place}
                          </Typography>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails className={classes.details}>
                        <div className={classes.column} key={team.teamName}>
                          <TextField
                            name="players"
                            variant="outlined"
                            label="Enter the player name"
                            value={createPlayersData.players}
                            fullWidth
                            onChange={(e) => handlePlayersChange(e)}
                            onKeyDown={(e) => handleKeyPress(e, team._id)}
                          />

                          {team.players.map((p, index) => (
                            <Chip
                              key={p.index}
                              label={`${index + 1} # ${p}`}
                              onDelete={(e) => handleSingleDelete(e,team._id,index)}
                              className={classes.chips}
                            />
                          ))}
                        </div>
                        <div className={classes.column} />
                        <div className={`${classes.column} ${classes.helper}`}>
                          <Typography variant="caption">
                            Update Team ...
                            <TextField
                              label="Title of team"
                              name="teamName"
                              onChange={(e) => handlePlayersChange(e)}
                              value={createPlayersData.teamName}
                            />
                            <TextField
                              label="Origin"
                              name="place"
                              onChange={(e) => handlePlayersChange(e)}
                              value={createPlayersData.place}
                            />
                            <br />
                          </Typography>
                        </div>
                      </AccordionDetails>
                      <Divider />
                      <AccordionActions key={team.players}>
                        <Button>
                          {" "}
                          Delete Team
                          <DeleteIcon
                            fontSize="large"
                            onClick={(e) => handleDelete(e, team._id)}
                          />
                        </Button>
                        <Button size="small" onClick={clear}>
                          Clear
                        </Button>
                        <Button
                          size="small"
                          color="primary"
                          type="submit"
                          onClick={(e) => savePlayers(e, team._id)}>
                          Save
                        </Button>
                      </AccordionActions>
                    </Accordion>
                  </Paper>
                </Link>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}
