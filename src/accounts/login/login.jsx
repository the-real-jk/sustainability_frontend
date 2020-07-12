import React from "react";
import "./login.css";
import "../../index.css";
import "../account.css";
import TextField from "@material-ui/core/TextField";
import { Grid, Typography, Button } from "@material-ui/core";
import {
  loggedIn,
  loggedOut,
  redirectTo,
} from "../../app/actions/accounts/account_actions";
import { connect, useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { checkUserCredentials } from "../../api/account_api";
import { getUsername, getPassword } from "../login/login_logic";

export default function Login() {
  const getState = useSelector((state) => state);
  const dispatch = useDispatch();

  //TODO: the problem is, that redux state redirectTo will always be set, as
  //checkUserCredentials only checks, if the POST-request (!!!!!) was successful. In other
  //words, checkUserCredentials checks if the request did not cause an error. In this case, redirectTo will be set to /
  const handleSubmit = (event) => {
    event.preventDefault();
    let link = checkUserCredentials(getUsername, getPassword);

    dispatch(redirectTo(link));
  };

  if (getState.redirect) {
    return <Redirect to={getState.redirect} />;
  } else {
    console.log("failed");
  }

  return (
    <div className="loginPage">
      {/* login form */}
      <Grid
        container
        className="formContainer"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h2" className="center">
            Login
          </Typography>
          <form>
            {/* username */}
            <Grid item xs={12}>
              <div>
                <TextField
                  required
                  id="username"
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
                ></TextField>
              </div>
            </Grid>
            <Grid item xs>
              <div>
                <Button
                  id="btnLogin"
                  type="submit" //TODO change to type submit and redirect user to landing page if user credentials are valid
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
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
