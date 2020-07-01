import "./index.css";
import React from "react";
import Navbar from "./navigation/navbar";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import Login from "./accounts/login";

export default class App extends React.Component {
  render() {
    const AuthenticatedRoutes = () => {
      return (
        <div>
          <div id="container"></div>
        </div>
      );
    };

    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    );
  }
}
