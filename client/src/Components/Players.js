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
import Chip from "@material-ui/core/Chip";
import { TextField } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
  chips:{
    margin: "5px",
    display: "block",
    width: "30%",
  },
  textField: {
    display: "block",
    margin: "10px"
  },
});

export const Players = () => {
  const classes = useStyles();
  const TeamsDataBase = useSelector((state) => state.teams);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [updatedPlayersData, setUpdatedPlayersData] = useState([]);
  
  useEffect(()=>{
    setUpdatedPlayersData(TeamsDataBase);
  },[search, updatedPlayersData, TeamsDataBase, dispatch]);
 

console.log(updatedPlayersData)
  return (
    <>
     <Paper elevation={3} className={classes.players}>
      <Typography variant="h3">My Players</Typography></Paper>
      <Paper elevation={3} className={classes.players}>
        <Paper elevation={3} className={classes.center}>
        <TextField  
          label="Search me!" 
          value={search}
          onChange={(e)=> setSearch(e.target.value)} 
          />
          <TableContainer component={Paper} className="padding-grid ">
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Title Of Teams </StyledTableCell>
                  <StyledTableCell align="left">:</StyledTableCell>
                  <StyledTableCell align="left">Name of Players</StyledTableCell>
                  <StyledTableCell align="left">:</StyledTableCell>
                  <StyledTableCell align="left">Origin</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {updatedPlayersData.filter(item => {
                  
                  if (search ===""){
                    return item
                  } else if(item.teamName.toLowerCase().includes(search.toLowerCase()) || item.place.toLowerCase().includes(search.toLowerCase()) ){
                    return item
                  }
                  return console.log(item)
                }).map((P) => (
                  <StyledTableRow key={P._id}>
                    <StyledTableCell align="left">
                    <TextField
                      label="Update team title"
                      className={`${classes.margin} ${classes.textField}`}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">{P.teamName} <ArrowForwardIcon /></InputAdornment>,
                      }}
                    />
                    <TextField
                      label="Update team title"
                      className={`${classes.margin} ${classes.textField}`}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">{P.teamName} <ArrowForwardIcon /></InputAdornment>,
                      }}
                    />
                    </StyledTableCell>
                    <StyledTableCell align="left">:</StyledTableCell>
                    <StyledTableCell align="left">
                    
                      {P.players.map((teamDataRendered,index) => 
                       <Chip key={teamDataRendered.index} label={`${index + 1} # ${teamDataRendered}`} onDelete={() => {}} className={classes.chips} />
                       )}
                    </StyledTableCell>
                    <StyledTableCell align="left">:</StyledTableCell>
                    <StyledTableCell align="left" key={P.place} >{P.place}</StyledTableCell>
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
