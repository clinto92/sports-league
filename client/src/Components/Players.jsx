import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, Paper, StepButton, Typography } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "../CustomHooks/useStyles";
import { usePlayers } from "../CustomHooks/usePlayers";
import { PaginationPlayers } from "./Child_Components/Pagination";

export const Players = () => {
  const { useStyle, StyledTableCell, StyledTableRow } = useStyles();
  const classes = useStyle();

  const {
    teamDatabase,
    handlePlayersSubmit,
    setSearch,
    search,
    updated,
    setUpdated,
    searchTeam
  } = usePlayers();
  return (
    <>
      <Paper elevation={3} className={classes.players}>
        <Typography variant="h3">My Players</Typography>
      </Paper>
      <Paper elevation={3} className={classes.players}>
        <Paper elevation={3} className={classes.center}>
          <TextField
            label="Search Team or players here!"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <StepButton onClick={searchTeam} className={classes.searchButton} color="primary" label="Search me!" />
          <TableContainer component={Paper} className="padding-grid ">
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">
                    Title Of Teams{" "}
                  </StyledTableCell>
                  <StyledTableCell align="left">:</StyledTableCell>
                  <StyledTableCell align="left">
                    Name of Players
                  </StyledTableCell>
                  {/* <StyledTableCell align="left">:</StyledTableCell>
                  <StyledTableCell align="left">Origin</StyledTableCell> */}
                </TableRow>
              </TableHead>

              <TableBody>
                {teamDatabase.forEach((P) => (
                  <StyledTableRow key={P._id}>
                    <StyledTableCell align="left">
                      <TextField
                        label="Team title"
                        name="teamName"
                        onChange={(e) =>
                          setUpdated({
                            ...updated,
                            teamName: e.target.value,
                          })
                        }
                        className={`${classes.margin} ${classes.textField}`}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {P.teamName} <ArrowForwardIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        label="Place"
                        name="place"
                        onChange={(e) =>
                          setUpdated({
                            ...updated,
                            place: e.target.value,
                          })
                        }
                        className={`${classes.margin} ${classes.textField}`}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {P.place} <ArrowForwardIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Button onClick={handlePlayersSubmit}>Update</Button>
                    </StyledTableCell>
                    <StyledTableCell align="left">:</StyledTableCell>
                    <StyledTableCell align="left">
                      {P.players.map((teamDataRendered, index) => (
                        <Chip
                          key={teamDataRendered.index}
                          label={`${index + 1} # ${teamDataRendered}`}
                          onDelete={() => {}}
                          className={classes.chips}
                        />
                      ))}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <PaginationPlayers />
      </Paper>
    </>
  );
};
