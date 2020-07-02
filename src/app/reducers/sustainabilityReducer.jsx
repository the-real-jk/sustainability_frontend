import { loggedOut } from "../actions/actions";

const initialState = {
  loggedIn: false,
  loggedOut: true,
};

function SustainabilityReducer(state = initialState, action) {
  console.log("reducer", state, action);

  switch (action.type) {
    case "LOGGED_IN":
      return Object.assign({}, state, {
        loggedIn: true,
        loggedOut: false,
      });
    case "LOGGED_OUT":
      return Object.assign({}, state, {
        loggedIn: false,
        loggedOut: true,
      });
    default:
      return state;
  }
}
export default SustainabilityReducer;
