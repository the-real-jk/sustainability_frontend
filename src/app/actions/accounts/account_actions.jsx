import {
  LOGGED_IN,
  LOGGED_OUT,
  SWITCH_STATE_CHANGED,
  REDIRECT,
} from "./account_actions_constants";

export const loggedIn = () => ({ type: LOGGED_IN });
export const loggedOut = () => ({ type: LOGGED_OUT });
export const switchStateChanged = (payload) => ({
  type: SWITCH_STATE_CHANGED,
  payload: payload,
});
export const redirectTo = (payload) => ({
  type: REDIRECT,
  payload: payload,
});
