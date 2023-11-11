"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // =================================================================
  const emailInput = document.querySelector("#email");
  const pwInput = document.querySelector("#password");
  const pwCheckInput = document.querySelector("#password_check");
  const emailErrorMsg = document.querySelector("#email_error");
  const pwErrorMsg = document.querySelector("#pw_error");
  const pwCheckErrorMsg = document.querySelector("#pwCheck_error");
  const icons = document.querySelectorAll(".password_eyes");
  const signUpBtn = document.querySelector("#signup_btn");
  const pwIcon = icons[0];
  const pwCheckedIcon = icons[1];

  // icon 추적/변경용 변수
  let pwVisibleToggle = false;
  let pwCheckedVisibleToggle = false;

  // 에러이벤트 표시용 함수
  function showError(errorMsg, input, message) {
    errorMsg.classList.remove("done");
    errorMsg.classList.add("show");
    errorMsg.innerHTML = message;
    input.classList.add("errorInput_style");
  }
  // 에러이벤트 숨김용 함수
  function doneError(errorMsg, input) {
    errorMsg.classList.remove("show");
    errorMsg.classList.add("done");
    input.classList.remove("errorInput_style");
  }

  //이메일인풋 에러핸들러
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
  //패스워드인풋 에러핸들러
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
  //패스워드체크(재확인) 에러핸들러
  pwCheckInput.addEventListener("blur", () => {
    if (pwInput.value !== pwCheckInput.value) {
      showError(pwCheckErrorMsg, pwCheckInput, "비밀번호가 일치하지 않아요.");
    } else {
      doneError(pwCheckErrorMsg, pwCheckInput);
    }
  });
  //아이콘 변경용 핸들러
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
  //아이콘(패스워드체크) 변경용 핸들러
  pwCheckedIcon.addEventListener("click", () => {
    if (pwCheckedVisibleToggle) {
      pwCheckedIcon.src = "./svg/signin/eye-off.svg";
      pwCheckInput.type = "password";
    } else {
      pwCheckedIcon.src = "./svg/signin/eye-on.svg";
      pwCheckInput.type = "text";
    }
    pwCheckedVisibleToggle = !pwCheckedVisibleToggle;
  });

  // 회원가입 클릭 버튼 이벤트함수
  function signupHandler(e) {
    if (emailInput.value === "") {
      showError(emailErrorMsg, emailInput, "이메일 주소를 입력하세요.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      showError(emailErrorMsg, emailInput, "올바른 이메일 주소가 아닙니다.");
    } else if (emailInput.value === "test@codeit.com") {
      showError(emailErrorMsg, emailInput, "이미 사용 중인 이메일입니다.");
    } else {
      doneError(emailErrorMsg, emailInput);
    }

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

    if (pwInput.value !== pwCheckInput.value) {
      showError(pwCheckErrorMsg, pwCheckInput, "비밀번호가 일치하지 않아요.");
    } else {
      doneError(pwCheckErrorMsg, pwCheckInput);
    }

    if (
      emailErrorMsg.classList.contains("show") ||
      pwErrorMsg.classList.contains("show") ||
      pwCheckErrorMsg.classList.contains("show")
    ) {
      e.preventDefault();
    }

    console.log("Success signup");
  }
  // 회원가입 핸들러 / 엔터기능구현
  signUpBtn.addEventListener("click", signupHandler);
  signUpBtn.addEventListener("keyup", (e) => {
    e.keyCode === 13 && signupHandler(e);
  });

  // =================================================================
});
