import { $submitBtn, $emailInput, $passwordInput, $passwordVerifyInput } from "./modules/domElements.js";
import { initializeSignForm as initializeSignUpForm } from "./modules/authEventHandler.js";
import { triggerInputValidationError } from "./modules/authDOMHandler.js";
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

const trySignUp = async (user, emailValidation, passwordValidation, passwordVerifyValidation) => {
  try {
    if (!(emailValidation.result && passwordValidation.result && passwordVerifyValidation.result)) {
      throw new Error();
    }
    const response = await fetch(`https://bootcamp-api.codeit.kr/api/sign-up`, {
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
  } catch {
    if (!emailValidation.result) triggerInputValidationError($emailInput, emailValidation.message);
    if (!passwordValidation.result) triggerInputValidationError($passwordInput, passwordValidation.message);
    if (!passwordVerifyValidation.result)
      triggerInputValidationError($passwordVerifyInput, passwordVerifyValidation.message);
  }
};
