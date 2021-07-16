import React from "react";
import { NavBar } from "./NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { About } from "./About";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={LoginScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
