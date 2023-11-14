import { $emailInput, $passwordInput, $passwordVerifyInput } from "./domElements.js";
import { isRegEmail, isRegPassword } from "./validator.js";
import { checkEmailExist } from "./authVerifyUser.js";
import { triggerInputValidationError, toggleWarningborder, deleteWarningText } from "./authDOMHandler.js";

const $inputForm = document.querySelector(".input-container");

const initializeSignForm = () => {
  const formFocusInHandler = $inputForm.addEventListener("focusin", (e) => {
    toggleWarningborder(e.target);
    deleteWarningText(e.target);
  });

  const eyeIconClickHandler = $inputForm.addEventListener("click", ({ target }) => {
    if (target.classList.contains("toggle-show-pwd")) {
      if (target.dataset.show === "true") {
        target.src = "../images/eye-off.svg";
        target.previousElementSibling.type = "password";
        target.dataset.show = "false";
      } else {
        target.src = "../images/eye-on.svg";
        target.previousElementSibling.type = "text";
        target.dataset.show = "true";
      }
    }
  });

  const formFocusOutHandler = $inputForm.addEventListener("focusout", (e) => {
    const userActionType = $inputForm.childElementCount > 2 ? "signUp" : "signIn";
    switch (e.target) {
      case $emailInput:
        emailErrorCheck(userActionType);
        break;
      case $passwordInput:
        pwdErrorCheck();
        break;
      case $passwordVerifyInput:
        pwdVerifyErrorCheck();
        break;
      default:
    }
  });
};

const emailErrorCheck = (checkCase) => {
  if ($emailInput.value === "") {
    triggerInputValidationError($emailInput, "이메일을 입력해주세요.");
  } else if (!isRegEmail($emailInput.value)) {
    triggerInputValidationError($emailInput, "올바른 이메일 주소가 아닙니다.");
  } else if (checkEmailExist($emailInput.value) && checkCase === "signUp") {
    triggerInputValidationError($emailInput, "이미 사용 중인 이메일입니다.");
  }
};

const pwdErrorCheck = () => {
  if ($passwordInput.value === "") {
    triggerInputValidationError($passwordInput, "비밀번호를 입력해주세요.");
  } else if (!isRegPassword($passwordInput.value)) {
    triggerInputValidationError($passwordInput, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }
};

const pwdVerifyErrorCheck = () => {
  if ($passwordVerifyInput.value !== $passwordInput.value) {
    triggerInputValidationError($passwordVerifyInput, "비밀번호가 일치하지 않아요.");
  } else if ($passwordVerifyInput.value === "") {
    triggerInputValidationError($passwordVerifyInput, "비밀번호를 입력해주세요.");
  } else if (!isRegPassword($passwordVerifyInput.value)) {
    triggerInputValidationError($passwordVerifyInput, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }
};

export { initializeSignForm, triggerInputValidationError, emailErrorCheck, pwdErrorCheck, pwdVerifyErrorCheck };
