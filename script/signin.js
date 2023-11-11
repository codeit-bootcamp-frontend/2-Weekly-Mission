"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // =================================================================
  const emailInput = document.querySelector("#email");
  const pwInput = document.querySelector("#password");
  const emailErrorMsg = document.querySelector("#email_error");
  const pwErrorMsg = document.querySelector("#pw_error");
  const pwIcons = document.querySelectorAll(".password_eyes");

  let pwVisibleToggle = true;

  emailInput.addEventListener("blur", () => {
    if (emailInput.value === "") {
      emailErrorMsg.classList.remove("done");
      emailErrorMsg.classList.add("show");
      emailErrorMsg.innerHTML = "이메일 주소를 입력하세요.";
      emailInput.classList.add("errorInput_style");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailErrorMsg.classList.remove("done");
      emailErrorMsg.classList.add("show");
      emailErrorMsg.innerHTML = "올바른 이메일 주소가 아닙니다.";
      emailInput.classList.add("errorInput_style");
    } else if (emailInput.value === "test@codeit.com") {
      emailErrorMsg.classList.remove("done");
      emailErrorMsg.classList.add("show");
      emailErrorMsg.innerHTML = "이미 사용 중인 이메일입니다.";
      emailInput.classList.add("errorInput_style");
    } else {
      emailErrorMsg.classList.remove("show");
      emailErrorMsg.classList.add("done");
      emailInput.classList.remove("errorInput_style");
    }
  });

  pwInput.addEventListener("blur", () => {
    if (pwInput.value === "") {
      pwErrorMsg.classList.remove("done");
      pwErrorMsg.classList.add("show");
      pwErrorMsg.innerHTML = "비밀번호를 입력해주세요.";
      pwInput.classList.add("errorInput_style");
    } else if (
      pwInput.value.length < 8 ||
      /^[a-zA-Z]+$/.test(pwInput.value) ||
      /^\d+$/.test(pwInput.value)
    ) {
      pwErrorMsg.classList.remove("done");
      pwErrorMsg.classList.add("show");
      pwErrorMsg.innerHTML =
        "이메일 주소는 8자 이상이어야 하며, 문자와 숫자를 혼합해야 합니다.";
      pwInput.classList.add("errorInput_style");
    } else {
      pwErrorMsg.classList.remove("show");
      pwErrorMsg.classList.add("done");
      pwInput.classList.remove("errorInput_style");
    }
  });

  pwIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      if (pwVisibleToggle) {
        icon.src = "./svg/signin/eye-off.svg";
        pwInput.type = "password";
      } else {
        icon.src = "./svg/signin/eye-on.svg";
        pwInput.type = "text";
      }
      pwVisibleToggle = !pwVisibleToggle;
    });
  });

  // =================================================================
});
