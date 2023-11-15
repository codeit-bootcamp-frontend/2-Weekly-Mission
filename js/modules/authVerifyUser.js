import userData from "../database/userData.js";
import { $emailInput, $passwordInput, $passwordVerifyInput } from "./domElements.js";
import { triggerInputValidationError } from "./authDOMHandler.js";

const API_URL = "https://bootcamp-api.codeit.kr/api";

const postLogin = async (user) => {
  try {
    const response = await fetch(`${API_URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error();
    }
    const result = await response.json();
    const { data } = result;

    for (const key in data) {
      localStorage.setItem(key, data[key]);
    }

    location.href = "./folder.html";
  } catch (error) {
    triggerInputValidationError($emailInput, "이메일을 확인해주세요");
    triggerInputValidationError($passwordInput, "비밀번호를 확인해주세요.");
  }
};

const checkEmailExist = async (email) => {
  try {
    const userEmail = {
      email: email,
    };
    const response = await fetch(`${API_URL}/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userEmail),
    });
    if (!response.ok) {
      throw new Error();
    }
    alert("사용가능한 이메일입니다.");
  } catch (error) {
    triggerInputValidationError($emailInput, "이미 사용 중인 이메일입니다.");
    return;
  }
};

const trySignUp = async (user, emailValidation, passwordValidation, passwordVerifyValidation) => {
  try {
    if (!(emailValidation.result && passwordValidation.result && passwordVerifyValidation.result)) {
      throw new Error();
    }
    const response = await fetch(`${API_URL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error();
    }

    const result = await response.json();

    const { data } = result;

    for (const key in data) {
      localStorage.setItem(key, data[key]);
    }

    location.href = "./folder.html";
  } catch {
    if (!emailValidation.result) triggerInputValidationError($emailInput, emailValidation.message);
    if (!passwordValidation.result) triggerInputValidationError($passwordInput, passwordValidation.message);
    if (!passwordVerifyValidation.result)
      triggerInputValidationError($passwordVerifyInput, passwordVerifyValidation.message);
  }
};

export { postLogin, checkEmailExist, trySignUp };
