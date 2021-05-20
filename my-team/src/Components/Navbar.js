import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link
          to="/"
          className="nav-item active nav-link navbar-brand padding-grid"
        >
          <span> ⚽</span> SPORTS LEAGUE
        </Link>

        <Link
          to="/"
          className="nav-item active nav-link navbar-nav mr-auto padding-grid inline"
        >
          TEAM
        </Link>

        <ul className="navbar-nav mr-auto">
          <Link
            to="/players"
            className="nav-item active nav-link nav-link padding-grid inline"
          >
            PLAYERS
          </Link>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-link padding-grid inline"></li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-link padding-grid inline"></li>
        </ul>
      </nav>
    </div>
  );
}
