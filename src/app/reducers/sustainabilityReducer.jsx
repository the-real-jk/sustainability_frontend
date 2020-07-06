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
      return { ...state, loggedIn: true };
    case "LOGGED_OUT":
      return { ...state, loggedIn: false };

    default:
      return state;
  }
}
export default SustainabilityReducer;
