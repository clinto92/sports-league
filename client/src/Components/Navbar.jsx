import React from "react";
import { Link } from "react-router-dom";
import {Typography} from "@material-ui/core";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link
          to="/"
          className="nav-item active nav-link navbar-brand "
        >
         <Typography variant="h4"> <span> ⚽</span> SPORTS LEAGUE</Typography>
        </Link>
        <ul className="navbar-nav mr-auto">
        <Link
          to="/"
          className="nav-item active nav-link  inline"
        >
          TEAM
        </Link>
        </ul>
        <ul className="navbar-nav mr-auto">
          <Link
            to="/players"
            className="nav-item active nav-link  inline"
          >
            PLAYERS
          </Link>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-link  inline"></li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-link  inline"></li>
        </ul>
      </nav>
    </div>
  );
}
