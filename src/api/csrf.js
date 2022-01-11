import axios from "./api";
import Cookie from "js-cookie";

function getCookie() {
  const token = Cookie.get("XSRF-TOKEN");

  if (token) {
    return new Promise((resolve) => {
      resolve(token);
    });
  }

  axios.get("/sanctum/csrf-cookie");
}

export default getCookie;
