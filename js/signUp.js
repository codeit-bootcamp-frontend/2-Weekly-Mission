import { $submitBtn, $emailInput, $passwordInput, $passwordVerifyInput } from "./modules/domElements.js";
import {
  emailErrorCheck,
  initializeSignForm as initializeSignUpForm,
  pwdErrorCheck,
  pwdVerifyErrorCheck,
} from "./modules/authEventHandler.js";
import { verifyValidId, verifyValidPassword, verifyValidPasswordVerify } from "./modules/authVerifyUser.js";

initializeSignUpForm();

const submitSignUpHandler = $submitBtn.addEventListener("click", (e) => {
  if (
    verifyValidId($emailInput.value) &&
    verifyValidPassword($passwordInput.value) &&
    verifyValidPasswordVerify($passwordInput.value, $passwordVerifyInput.value)
  ) {
    $submitBtn.parentElement.action = "./folder.html";
  } else {
    e.preventDefault();
    verifyValidId($emailInput.value) ? null : emailErrorCheck("signUp");
    verifyValidPassword($passwordInput.value) ? null : pwdErrorCheck();
    verifyValidPasswordVerify($passwordInput.value, $passwordVerifyInput.value) ? null : pwdVerifyErrorCheck();
  }
});
