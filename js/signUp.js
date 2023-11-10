import { submitBtn, emailInput, passwordInput, inputForm, passwordVerifyInput } from "./modules/domSelectors.js";
import { regEmail, regPassword } from "./modules/regexPatterns.js";
import {
  authEvent,
  emailErrorCheck,
  pwdErrorCheck,
  pwdVerifyErrorCheck,
  specifyWarningPosition,
} from "./modules/authModule.js";
import { verifyValidId, verifyValidPassword, verifyValidPasswordRepeat } from "./modules/verifyUser.js";
authEvent();

const formFocusOutHandler = inputForm.addEventListener("focusout", (e) => {
  switch (e.target) {
    case emailInput:
      emailErrorCheck("signUp");
      break;
    case passwordInput:
      pwdErrorCheck();
    default:
    case passwordVerifyInput:
      pwdVerifyErrorCheck();
      break;
  }
});

const submitSignUpHandler = submitBtn.addEventListener("click", (e) => {
  if (
    verifyValidId(emailInput.value, "signUp") &&
    verifyValidPassword(passwordInput.value) &&
    verifyValidPasswordRepeat(passwordInput.value, passwordVerifyInput.value)
  ) {
    submitBtn.parentElement.action = "./folder.html";
  } else {
    e.preventDefault();
    verifyValidId(emailInput.value, "signUp") ? null : emailErrorCheck("signUp");
    verifyValidPassword(passwordInput.value) ? null : pwdErrorCheck();
    verifyValidPasswordRepeat(passwordInput.value, passwordVerifyInput.value) ? null : pwdVerifyErrorCheck();
  }
});
