//check if the token is passed in. If it is, set it to the global header;
// if not, delete it from the global header.

import axios from "axios";
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
