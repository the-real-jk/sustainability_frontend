const initialState = {
  loggedIn: false,
  gtc: false,
};

function SustainabilityReducer(state = initialState, action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, loggedIn: true };
    case "LOGGED_OUT":
      return { ...state, loggedIn: false };
    case "SWITCH_STATE_CHANGED":
      return { ...state, gtc: action.payload };

    default:
      return state;
  }
}
console.log(initialState.gtc);
export default SustainabilityReducer;
