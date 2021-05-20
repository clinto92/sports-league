import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Teams from "./Components/Teams";
import { Players } from "./Components/Players";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Teams />
          </Route>
          <Route path="/players" exact>
            <Players />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
