import userData from "../database/userData.js";
import { isRegEmail, isRegPassword } from "./validator.js";

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

const checkEmailExist = (email) => {
  for (const key in userData) {
    if (userData[key].email === email) {
      return true;
    }
  }
  return false;
};

const verifyValidId = (email) => {
  return email !== "" && isRegEmail(email) && !checkEmailExist(email) ? true : false;
};

const verifyValidPassword = (password) => {
  return password !== "" && isRegPassword(password) ? true : false;
};

const verifyValidPasswordVerify = (password, passwordRepeat) => {
  return passwordRepeat !== "" && isRegPassword(passwordRepeat) && password === passwordRepeat ? true : false;
};

export { verifyLoginCredentials, verifyValidId, verifyValidPassword, verifyValidPasswordVerify, checkEmailExist };
