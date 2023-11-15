import userData from "../database/userData.js";

const verifyLoginCredentials = (email, password) => {
  for (const key in userData) {
    if (userData[key].email === email) {
      if (userData[key].password === password) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
};

const checkEmailExist = (email) => Object.values(userData).some((user) => user.email === email);

export { verifyLoginCredentials, checkEmailExist };
