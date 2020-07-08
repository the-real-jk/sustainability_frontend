import {
  LOGGED_IN,
  LOGGED_OUT,
  SWITCH_STATE_CHANGED,
} from "./action_constants";

export const loggedIn = () => ({ type: LOGGED_IN });
export const loggedOut = () => ({ type: LOGGED_OUT });
export const switchStateChanged = (payload) => ({
  type: SWITCH_STATE_CHANGED,
  payload: payload,
});
