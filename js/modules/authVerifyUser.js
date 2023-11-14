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

const checkEmailExist = (email) => Object.values(userData).some((user) => user.email === email);

const verifyValidId = (email, checkCase) => {
  if (email === "") return { result: false, message: "이메일을 입력해주세요." };
  if (!isRegEmail(email)) return { result: false, message: "올바른 이메일 주소가 아닙니다." };
  if (checkCase === "signUp" && checkEmailExist(email))
    return { result: false, message: "이미 사용 중인 이메일입니다." };
  return { result: true, message: null };
};

const verifyValidPassword = (password) => {
  if (password === "") return { result: false, message: "비밀번호를 입력해주세요." };
  if (!isRegPassword(password)) return { result: false, message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요." };
  return { result: true, message: null };
};

const verifyValidPasswordVerify = (password, passwordRepeat) => {
  if (password === passwordRepeat) return { result: true, message: null };
  else return { result: false, message: "비밀번호가 일치하지 않아요." };
};

export { verifyLoginCredentials, verifyValidId, verifyValidPassword, verifyValidPasswordVerify };
