import React from "react";
import "./register.css";
import "../../index.css";
import "../account.css";
import TextField from "@material-ui/core/TextField";
import {
  Grid,
  Typography,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { switchStateChanged } from "../../app/actions/actions";
import { Link } from "react-router-dom";
import { addUser } from "../../app/api";

export default function Register() {
  const gtcAccepted = useSelector((state) => state.gtc);
  const dispatch = useDispatch();
  const axios = require("axios");

  const handleChange = (event) => {
    let payload = event.target.checked;
    dispatch(switchStateChanged(payload));
  };

  return (
    <div className="registrationPage">
      {/* registration form */}
      <Grid
        container
        className="formContainer"
        justify="center"
        alignItems="center"
        spacing={2}
        direction="row"
        xs={12}
      >
        <Grid item xs>
          <Typography variant="h2" className="center">
            Registrierung
          </Typography>
          <form>
            <Grid container spacing={2}>
              {/* firstname */}
              <Grid item xs>
                <div>
                  <TextField
                    required
                    id="firstname"
                    autoComplete="off"
                    type="text"
                    label="Vorname"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </div>
              </Grid>
              {/* lastname */}
              <Grid item xs>
                <div>
                  <TextField
                    required
                    id="lastname"
                    autoComplete="off"
                    type="text"
                    label="Nachname"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </div>
              </Grid>
            </Grid>
            {/* username */}
            <Grid item xs>
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
            {/* choose a password and confirm it */}
            <Grid container>
              {/* password (at least 12 digits)*/}
              {/* TODO: currently there's no space between the Textfields if screensize is bigger than 960px. fix this. */}
              {/* TODO: make sure that password is at least 12 characters long */}
              <Grid item xs={12} md>
                <div>
                  <TextField
                    required
                    id="password"
                    autoComplete="off"
                    type="password"
                    label="Passwort"
                    variant="outlined"
                    fullWidth
                    // onChange={checkLength}
                  ></TextField>
                </div>
              </Grid>

              {/* confirm password */}
              <Grid item xs={12} md>
                <div>
                  <TextField
                    required
                    id="confirmPassword"
                    autoComplete="off"
                    type="password"
                    label="Passwort bestätigen"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </div>
              </Grid>
            </Grid>

            {/* email */}
            <Grid item xs>
              <div>
                <TextField
                  required
                  id="email"
                  autoComplete="off"
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </div>
            </Grid>

            {/* User has to accept the general terms and conditions in order to register */}
            <Grid item xs>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={gtcAccepted}
                      onChange={handleChange}
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="caption">
                      Ich habe die{" "}
                      <Link to="gtc">Allgemeinen Geschäftsbedingungen</Link>{" "}
                      sowie die <Link to="tos">Nutzungsbedingungen</Link>{" "}
                      gelesen und stimme diesen zu.
                    </Typography>
                  }
                ></FormControlLabel>
              </div>
            </Grid>
            {/* register button */}
            <Grid item xs>
              <div>
                <Button
                  id="btnRegister"
                  type="button" //TODO: change type to submit
                  variant="contained"
                  color="primary"
                  onClick={addUser} //TODO: Add onClick event
                  disabled={!gtcAccepted}
                >
                  Registrieren
                </Button>
              </div>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
