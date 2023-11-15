import { $submitBtn, $emailInput, $passwordInput, $passwordVerifyInput } from "./modules/domElements.js";
import { initializeSignForm as initializeSignUpForm } from "./modules/authEventHandler.js";
import { trySignUp } from "./modules/authVerifyUser.js";
import { validateEmail, validatePassword, validatePasswordVerify } from "./modules/validator.js";

initializeSignUpForm();

const submitSignUpHandler = $submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const emailValidation = validateEmail($emailInput.value);
  const passwordValidation = validatePassword($passwordInput.value);
  const passwordVerifyValidation = validatePasswordVerify($passwordInput.value, $passwordVerifyInput.value);

  const newUser = {
    email: $emailInput.value,
    password: $passwordInput.value,
  };

  trySignUp(newUser, emailValidation, passwordValidation, passwordVerifyValidation);
});
