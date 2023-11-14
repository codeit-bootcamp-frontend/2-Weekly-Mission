import { $emailInput, $passwordInput, $passwordVerifyInput } from "./domSelectors.js";
import { isRegEmail, isRegPassword } from "./validator.js";
import { CheckEmailExist } from "./authVerifyUser.js";
import { specifyWarningPosition, toggleWarningborder, deleteWarningText } from "./authDOMHandler.js";

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
    specifyWarningPosition($emailInput, "이메일을 입력해주세요.");
  } else if (!isRegEmail($emailInput.value)) {
    specifyWarningPosition($emailInput, "올바른 이메일 주소가 아닙니다.");
  } else if (CheckEmailExist($emailInput.value) && checkCase === "signUp") {
    specifyWarningPosition($emailInput, "이미 사용 중인 이메일입니다.");
  }
};

const pwdErrorCheck = () => {
  if ($passwordInput.value === "") {
    specifyWarningPosition($passwordInput, "비밀번호를 입력해주세요.");
  } else if (!isRegPassword($passwordInput.value)) {
    specifyWarningPosition($passwordInput, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }
};

const pwdVerifyErrorCheck = () => {
  if ($passwordVerifyInput.value !== $passwordInput.value) {
    specifyWarningPosition($passwordVerifyInput, "비밀번호가 일치하지 않아요.");
  } else if ($passwordVerifyInput.value === "") {
    specifyWarningPosition($passwordVerifyInput, "비밀번호를 입력해주세요.");
  } else if (!isRegPassword($passwordVerifyInput.value)) {
    specifyWarningPosition($passwordVerifyInput, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }
};

export { initializeSignForm, specifyWarningPosition, emailErrorCheck, pwdErrorCheck, pwdVerifyErrorCheck };
