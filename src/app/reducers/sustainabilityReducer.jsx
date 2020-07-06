import { loggedOut } from "../actions/actions";

const initialState = {
  loggedIn: false,
  loggedOut: true,
  loginCredentials: {
    username: "",
    password: "",
  },
};

function SustainabilityReducer(state = initialState, action) {
  console.log("reducer", state, action);

  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, loggedIn: true, loggedOut: false };
    case "LOGGED_OUT":
      return { ...state, loggedIn: false, loggedOut: true };

    case "GET_LOGIN_CREDENTIALS":
      return {
        ...state,
        loginCredentials: {
          ...state.loginCredentials,
          username: action.payload.username,
          password: action.payload.password,
        },
      };

    //TODO: Do something with login credentials below
    //
    //...code...
    //

    default:
      return state;
  }
}
export default SustainabilityReducer;
