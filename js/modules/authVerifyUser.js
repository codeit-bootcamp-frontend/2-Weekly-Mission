import userData from "../database/userData.js";
import { $emailInput, $passwordInput } from "./domElements.js";
import { triggerInputValidationError } from "./authDOMHandler.js";

const API_URL = "https://bootcamp-api.codeit.kr";

const postLogin = async (user) => {
  try {
    const response = await fetch(`${API_URL}/api/sign-in`, {
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
    const response = await fetch(`${API_URL}/api/check-email`, {
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
  }
};

export { postLogin, checkEmailExist };
