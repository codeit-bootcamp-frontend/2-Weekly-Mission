import { submitBtn, emailInput, passwordInput } from "./modules/domSelectors.js";
import { authEvent, specifyWarningPosition } from "./modules/authModule.js";
import { verifyLoginCredentials } from "./modules/verifyUser.js";

authEvent();

const submitSignInHandler = submitBtn.addEventListener("click", (e) => {
  if (verifyLoginCredentials(emailInput.value, passwordInput.value)) {
    submitBtn.parentElement.action = "./folder.html";
  } else {
    e.preventDefault();
    specifyWarningPosition(emailInput, "이메일을 확인해주세요");
    specifyWarningPosition(passwordInput, "비밀번호를 확인해주세요.");
  }
});
