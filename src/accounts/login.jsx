import React from "react";
import "./login.css";
import "../index.css";
import TextField from "@material-ui/core/TextField";
import { Grid, Typography, Button } from "@material-ui/core";
import { loggedIn, loggedOut } from "../app/actions/actions";
import { connect } from "react-redux";

const axios = require("axios");

export default class Login extends React.Component {
  async checkUserCredentials(username, password) {
    axios
      .post(
        "/api/login", {uname: username, passwd: password}
          // encodeURIComponent(username) +
          // "/" +
          // encodeURIComponent(password)
      )
      .then(function (response) {
        console.log(response);
        this.props.loggedIn();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getUsernameInput() {
    let username = "";
    username = document.getElementById("usernameInputLogin").value;
    return username;
  }
  getPasswordInput() {
    let password = document.getElementById("passwordInputLogin").value;
    return password;
  }

  render() {
    return (
      <div>
        {/* login form */}
        <Grid
          container
          className="formContainer"
          justify="center"
          alignItems="center"
          direction="column"
          spacing={0}
        >
          <Grid item xs={12} spacing={0}>
            <Typography variant="h2" className="center">
              Login
            </Typography>
            <form>
              {/* username */}
              <Grid item xs={12}>
                <div>
                  <TextField
                    required
                    id="usernameInputLogin"
                    autoComplete="off"
                    type="text"
                    label="Username"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </div>
              </Grid>
              {/* password */}
              <Grid item xs={12}>
                <div>
                  <TextField
                    required
                    id="passwordInputLogin"
                    autoComplete="off"
                    type="password"
                    label="Passwort"
                    variant="outlined"
                    fullWidth
                    onChange=""
                  ></TextField>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      this.checkUserCredentials(
                        this.getUsernameInput(),
                        this.getPasswordInput()
                      )
                    }
                  >
                    Login
                  </Button>
                </div>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    loggedOut: state.loggedOut,
  };
}

const mapDispatchToProps = {
  loggedIn,
  loggedOut,
};

connect(mapStateToProps, mapDispatchToProps)(Login);
