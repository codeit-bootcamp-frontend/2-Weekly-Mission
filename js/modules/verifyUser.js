const verifyLoginCredentials = (data, email, password) => {
  for (const key in data) {
    if (data[key].email === email) {
      if (data[key].password === password) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
};

export { verifyLoginCredentials };
