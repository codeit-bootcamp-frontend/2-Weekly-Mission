import userData from "../database/userData.js";
import { regEmail, regPassword } from "./regexPatterns.js";

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

const CheckEmailExist = (email) => {
  for (const key in userData) {
    if (userData[key].email === email) {
      return true;
    }
  }
  return false;
};

const verifyValidId = (email) => {
  return email !== "" && regEmail.test(email) && !CheckEmailExist(email) ? true : false;
};

const verifyValidPassword = (password) => {
  return password !== "" && regPassword.test(password) ? true : false;
};

const verifyValidPasswordRepeat = (password, passwordRepeat) => {
  return passwordRepeat !== "" && regPassword.test(passwordRepeat) && password === passwordRepeat ? true : false;
};

export { verifyLoginCredentials, verifyValidId, verifyValidPassword, verifyValidPasswordRepeat, CheckEmailExist };
