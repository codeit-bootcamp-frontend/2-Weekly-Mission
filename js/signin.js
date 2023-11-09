import { submitBtn, emailInput, passwordInput, inputForm } from "./modules/domSelectors.js";
import regEmail from "./modules/regexPatterns.js";
import { authEvent, specifyWarningPosition } from "./modules/authModule.js";
import userData from "./database/userData.js";
import { verifyLoginCredentials } from "./modules/verifyUser.js";

authEvent();

inputForm.addEventListener("focusout", (e) => {
  if (e.target.id === "input-id") {
    if (e.target.value === "") {
      specifyWarningPosition(emailInput, "이메일을 입력해주세요.");
    } else if (!regEmail.test(e.target.value)) {
      specifyWarningPosition(emailInput, "올바른 이메일 주소가 아닙니다.");
    }
  } else if (e.target.id === "input-pwd") {
    if (e.target.value === "") {
      specifyWarningPosition(passwordInput, "비밀번호를 입력해주세요.");
    }
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
