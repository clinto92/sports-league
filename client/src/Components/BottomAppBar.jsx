import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link, Typography } from "@material-ui/core";
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
    height: "70px",
    paddingTop: "20px",
    paddingBottom: "20px"
  },
});

function Copyright() {
    return (
      <Typography
        variant="body2"
        color="textSecondary"
        style={{ textAlign: "center" }}
      >
        {"© Copyright "}
        <Link color="inherit" href="https://www.linkedin.com/in/clinto-abraham-ayamkudiyil/">
          
        </Link>
        {"  @"}
        {new Date().getFullYear()}
        {"."}
        
      </Typography>
    );
  }

export const BottomAppBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}>
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Created by Top Of Cliff Developer" 
          value="intro"
          icon={<AllInclusiveIcon />}
        />
        <BottomNavigationAction
          label={<Copyright />}
          value="timeStamp"
          icon={<CalendarTodayIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
        
        
      </BottomNavigation>
    </div>
  );
};
