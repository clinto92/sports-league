import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Typography } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { getPlayersAction } from "../redux/actions/PlayerAction";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  players: {
    margin: "50px",
    padding: "20px",
    backgroundColor: "transparent",
  },
});

export const Players = () => {
  const classes = useStyles();
  const TeamsDataBase = useSelector((state) => state.teams);
  const dispatch = useDispatch();
  // const [updatedPlayersData, setUpdatedPlayersData] = useState();
 

  return (
    <>
      <Typography variant="h3">My Players</Typography>
      <Paper elevation={3} className={classes.players}>
        <Paper elevation={3} className={classes.center}>
          <TableContainer component={Paper} className="padding-grid ">
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Title Of Teams </StyledTableCell>
                  <StyledTableCell align="left">:</StyledTableCell>
                  <StyledTableCell align="left">Name of Players</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {TeamsDataBase.map((P) => (
                  <StyledTableRow key={P._id}>
                    <StyledTableCell align="left">
                      {P.teamName}
                    </StyledTableCell>
                    <StyledTableCell align="left">:</StyledTableCell>
                    <StyledTableCell align="left">
                      <li>{P.players}</li>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Paper>
    </>
  );
};
