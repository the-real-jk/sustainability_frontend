import React from "react";
import "./login.css";
import "../index.css";
import TextField from "@material-ui/core/TextField";
import store from "../app/store";
import { Grid, Typography } from "@material-ui/core";

export default class Login extends React.Component {
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
          <Grid item xs={12} spacing={1}>
            <Typography
              variant="h2"
              style={{ color: "white" }}
              className="center"
            >
              Login
            </Typography>
            <form>
              {/* username */}
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
              {/* password */}
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
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}
