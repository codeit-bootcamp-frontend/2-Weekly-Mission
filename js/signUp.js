import { $submitBtn, $emailInput, $passwordInput, $passwordVerifyInput } from "./modules/domElements.js";
import { initializeSignForm as initializeSignUpForm, triggerInputValidationError } from "./modules/authEventHandler.js";
import { verifyValidId, verifyValidPassword, verifyValidPasswordVerify } from "./modules/authVerifyUser.js";

initializeSignUpForm();

const submitSignUpHandler = $submitBtn.addEventListener("click", (e) => {
  const emailValidation = verifyValidId($emailInput.value);
  const passwordValidation = verifyValidPassword($passwordInput.value);
  const passwordVerifyValidation = verifyValidPasswordVerify($passwordVerifyInput.value);

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
