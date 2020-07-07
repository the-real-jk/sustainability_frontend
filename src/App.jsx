import "./index.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import Login from "./accounts/login";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
      </Switch>
    );
  }
}
