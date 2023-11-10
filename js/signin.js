import { submitBtn, emailInput, passwordInput, inputForm } from "./modules/domSelectors.js";
import { regEmail, regPassword } from "./modules/regexPatterns.js";
import { authEvent, specifyWarningPosition, emailErrorCheck, pwdErrorCheck } from "./modules/authModule.js";
import userData from "./database/userData.js";
import { verifyLoginCredentials, CheckEmailExist } from "./modules/verifyUser.js";

authEvent();

const formFocusOutHandler = inputForm.addEventListener("focusout", (e) => {
  switch (e.target) {
    case emailInput:
      emailErrorCheck("signIn");
      break;
    case passwordInput:
      pwdErrorCheck();
    default:
      break;
  }
});

const submitSignInHandler = submitBtn.addEventListener("click", (e) => {
  if (verifyLoginCredentials(userData, emailInput.value, passwordInput.value)) {
    submitBtn.parentElement.action = "./folder.html";
  } else {
    e.preventDefault();
    specifyWarningPosition(emailInput, "이메일을 확인해주세요");
    specifyWarningPosition(passwordInput, "비밀번호를 확인해주세요.");
  }
});
