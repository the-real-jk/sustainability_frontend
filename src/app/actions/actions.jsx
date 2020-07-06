import {
  LOGGED_IN,
  LOGGED_OUT,
  GET_LOGIN_CREDENTIALS,
} from "./action_constants";

export const loggedIn = () => ({ type: LOGGED_IN });
export const loggedOut = () => ({ type: LOGGED_OUT });

// export function getLoginCredentials(payload) {
//   return { type: GET_LOGIN_CREDENTIALS, payload };
// }
