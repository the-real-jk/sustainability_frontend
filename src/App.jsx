import "./index.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import Login from "./accounts/login/login";
import Register from "./accounts/register/register";
import { BrowserRouter as Router } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    );
  }
}adfasdfa
