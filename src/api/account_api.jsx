const axios = require("axios");

export async function addUser(username, password, firstname, lastname, email) {
  axios
    .post("/api/register", {
      uname: username(),
      passwd: password(),
      fname: firstname(),
      lname: lastname(),
      email: email(),
    })
    .then(function (response) {
      console.log(response.data);
      return "/";
    })
    .catch(function (error) {
      console.log(error);
    });
}

//called when user clicks login button. validates user input.
export async function checkUserCredentials(username, password) {
  axios
    .post("/api/login", { uname: username, passwd: password })
    .then(function (response) {
      console.log(response.data);
      return "/";
    })
    .catch(function (error) {
      console.log(error);
    });
}
