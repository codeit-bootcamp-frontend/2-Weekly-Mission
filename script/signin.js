"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // =================================================================
  const emailInput = document.querySelector("#email");
  const pwInput = document.querySelector("#password");
  const emailErrorMsg = document.querySelector("#email_error");
  const pwErrorMsg = document.querySelector("#pw_error");
  const pwIcon = document.querySelector(".password_eyes");
  const loginBtn = document.querySelector("#login_btn");

  let pwVisibleToggle = false;

  function showError(errorMsg, input, message) {
    errorMsg.classList.remove("done");
    errorMsg.classList.add("show");
    errorMsg.innerHTML = message;
    input.classList.add("errorInput_style");
  }

  function doneError(errorMsg, input) {
    errorMsg.classList.remove("show");
    errorMsg.classList.add("done");
    input.classList.remove("errorInput_style");
  }

  emailInput.addEventListener("blur", () => {
    if (emailInput.value === "") {
      showError(emailErrorMsg, emailInput, "이메일 주소를 입력하세요.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      showError(emailErrorMsg, emailInput, "올바른 이메일 주소가 아닙니다.");
    } else if (emailInput.value === "test@codeit.com") {
      showError(emailErrorMsg, emailInput, "이미 사용 중인 이메일입니다.");
    } else {
      doneError(emailErrorMsg, emailInput);
    }
  });

  pwInput.addEventListener("blur", () => {
    if (pwInput.value === "") {
      showError(pwErrorMsg, pwInput, "비밀번호를 입력해주세요.");
    } else if (
      pwInput.value.length < 8 ||
      /^[a-zA-Z]+$/.test(pwInput.value) ||
      /^\d+$/.test(pwInput.value)
    ) {
      showError(
        pwErrorMsg,
        pwInput,
        "비밀번호는 8자 이상이어야 하며, 문자와 숫자를 혼합해야 합니다."
      );
    } else {
      doneError(pwErrorMsg, pwInput);
    }
  });

  pwIcon.addEventListener("click", () => {
    if (pwVisibleToggle) {
      pwIcon.src = "./svg/signin/eye-off.svg";
      pwInput.type = "password";
    } else {
      pwIcon.src = "./svg/signin/eye-on.svg";
      pwInput.type = "text";
    }
    pwVisibleToggle = !pwVisibleToggle;
  });
  // =================================================================
});
