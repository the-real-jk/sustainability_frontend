import { loggedOut } from "../actions/actions";

const initialState = {
  loggedIn: false,
  loggedOut: true,
};

function SustainabilityReducer(state = initialState, action) {
  console.log("reducer", state, action);

  switch (action.type) {
    case "LOGGED_IN":
      return {
        loggedIn: true,
        loggedOut: false,
      };
    case "LOGGED_OUT":
      return {
        loggedOut: true,
        loggedIn: false,
      };

    default:
      return state;
  }
}
export default SustainabilityReducer;
