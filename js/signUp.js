import { $submitBtn, $emailInput, $passwordInput, $passwordVerifyInput } from "./modules/domElements.js";
import { initializeSignForm as initializeSignUpForm, triggerInputValidationError } from "./modules/authEventHandler.js";
import { validateEmail, validatePassword, validatePasswordVerify } from "./modules/authVerifyUser.js";

initializeSignUpForm();

const submitSignUpHandler = $submitBtn.addEventListener("click", (e) => {
  const emailValidation = validateEmail($emailInput.value);
  const passwordValidation = validatePassword($passwordInput.value);
  const passwordVerifyValidation = validatePasswordVerify($passwordVerifyInput.value);

  if (emailValidation.result && passwordValidation.result && passwordVerifyValidation.result) {
    $submitBtn.parentElement.action = "./folder.html";
  } else {
    e.preventDefault();
    if (!emailValidation.result) triggerInputValidationError($emailInput, emailValidation.message);
    if (!passwordValidation.result) triggerInputValidationError($passwordInput, passwordValidation.message);
    if (!passwordVerifyValidation.result)
      triggerInputValidationError($passwordVerifyInput, passwordVerifyValidation.message);
  }
});
