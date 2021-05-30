import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Teams from "./Components/Teams.jsx";
import { Players } from "./Components/Players.jsx";
import { NotFound } from "./Components/Not_Found/NotFound";
import { BottomAppBar } from "./Components/BottomAppBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Teams />
          </Route>
          <Route path="/team/:id" exact>
            <Teams />
          </Route>
          <Route path="/players" exact>
            <Players />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <BottomAppBar />
      </Router>
    </div>
  );
}

export default App;
