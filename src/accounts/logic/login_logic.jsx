import React from "react";
import { connect } from "react-redux";
// import { getLoginCredentials } from "../../app/actions/actions";
const axios = require("axios");

async function checkUserCredentials() {
  axios
    .post(
      "/api/login/" +
        encodeURIComponent(username) +
        "/" +
        encodeURIComponent(password)
    )
    .then(function (response) {
      console.log(response);
      return "";
    })
    .catch(function (error) {
      console.log(error);
    });
}

function mapStateToProps(state) {
  return {
    loginCredentials: state.loginCredentials,
  };
}

// const mapDispatchToProps = {
//   getLoginCredentials,
// };

export default connect();
