import { $submitBtn, $emailInput, $passwordInput } from "./modules/domElements.js";
import { initializeSignForm as initializeSignInForm } from "./modules/authEventHandler.js";
import { triggerInputValidationError } from "./modules/authDOMHandler.js";
import { verifyLoginCredentials } from "./modules/authVerifyUser.js";

const redirectIfAccessTokenExists = (directURL) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    location.replace(directURL);
  }
};

redirectIfAccessTokenExists("./folder.html");

initializeSignInForm();
const submitSignInHandler = $submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const user = {
    email: $emailInput.value,
    password: $passwordInput.value,
  };
  tryLogin(user);
});

const tryLogin = async (user) => {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
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
