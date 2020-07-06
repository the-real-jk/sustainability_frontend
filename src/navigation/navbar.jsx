import React from "react";
import "./nav.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { green } from "@material-ui/core/colors";
import { loggedIn, loggedOut } from "../app/actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  loginButton: {
    backgroundColor: green,
  },
  loginLink: {
    color: "#ffffff",
    textDecoration: "none",
  },
  toolbar: {
    backgroundColor: green,
  },
}));

// navbar uses hooks as this is the most simple solution for usage with useStyles
// For further information about useSelector and useDispatch visit
// https://blog.bitsrc.io/using-react-redux-hooks-97654aff01e4

//TODO: Make sure the code below doesnt look that ... well ... ugly. It's terrifying. Believe me. Awful.
export default function Navbar() {
  const getState = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();

  if (getState.loggedOut) {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Project:Sustainability
            </Typography>

            <Link className={classes.loginLink} to="/login">
              <Button
                className={classes.loginLink}
                onClick={() => dispatch(loggedIn())}
              >
                Login
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Project:Sustainability
          </Typography>
          <Button
            className={(classes.loginButton, classes.loginLink)}
            onClick={() => dispatch(loggedOut())}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
