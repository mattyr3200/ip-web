function isAuthenticated() {
  if (localStorage.getItem("user_token") != null) {
    return true;
  }

  return false;
}

export default isAuthenticated;
