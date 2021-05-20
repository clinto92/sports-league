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
});

export const Players = () => {
  const classes = useStyles();
  const Players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  // const [updatedPlayersData, setUpdatedPlayersData] = useState();
  dispatch(getPlayersAction());

  return (
    <>
      <Typography variant="h3">My Players</Typography>
      <Paper elevation={3} className={classes.center}>
        <Paper elevation={3} className={classes.center}>
          <TableContainer component={Paper} className="padding-grid ">
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Title </StyledTableCell>
                  <StyledTableCell align="left">:</StyledTableCell>
                  <StyledTableCell align="left">Value</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {Players.map((P) => (
                  <StyledTableRow key={P._id}>
                    <StyledTableCell align="left">
                      {P.teamname}{" "}
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
