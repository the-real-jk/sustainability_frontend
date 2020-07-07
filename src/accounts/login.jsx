import React from "react";
import "./login.css";
import "../index.css";
import TextField from "@material-ui/core/TextField";
import { Grid, Typography, Button } from "@material-ui/core";
import { loggedIn, loggedOut } from "../app/actions/actions";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

const axios = require("axios");

export default class Login extends React.Component {
  //called when user clicks login button. validates user input.
  async checkUserCredentials(username, password) {
    axios
      .post("/api/login", { uname: username, passwd: password })
      .then(function (response) {
        console.log(response.data);
        return "";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //get username given by the user
  getUsernameInput() {
    let username = document.getElementById("usernameInputLogin").value;
    return username;
  }
  //get password given by the user
  getPasswordInput() {
    let password = document.getElementById("passwordInputLogin").value;
    return password;
  }
  /* 
  ======================================================================================
  TODO: Make code below working.
  Doesn't work yet. used to redirect user to landing page if login credentials are valid
  ======================================================================================
  */
  handleSubmit() {
    let validationSuccessful = this.checkUserCredentials(
      this.getUsernameInput,
      this.getPasswordInput
    );
    if (validationSuccessful === true) {
      return <Redirect to="/" />;
    }
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
          <Grid item xs={12}>
            <Typography variant="h2" className="center">
              Login
            </Typography>
            <form onSubmit={this.handleSubmit}>
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
                    onChange={this.enableButton}
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
                    id="btnLogin"
                    type="button" //TODO change to type submit and redirect user to landing page if user credentials are valid
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
