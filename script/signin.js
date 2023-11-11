"use strict";
// import 할 때 한 번에 가져오기
import {
  emailErrHandler, // 이벤트헨들러
  pwErrHandler, // 이벤트헨들러
  emailInput, // 상수
  pwInput, // 상수
} from "./module/signForm/inputErrMsg.js";

document.addEventListener("DOMContentLoaded", function () {
  // =================================================================

  const pwIcon = document.querySelector(".password_eyes");
  const loginBtn = document.querySelector("#login_btn");

  // icon 추적/변경용 변수
  let pwVisibleToggle = false;

  // 로그인 클릭 버튼 이벤트함수
  function loginHandler(e) {
    if (
      emailInput.value === "test@codeit.com" &&
      pwInput.value === "codeit101"
    ) {
      console.log("Sucess Login");
    } else {
      e.preventDefault();
      showError(emailErrorMsg, emailInput, "이메일을 확인해주세요.");
      showError(pwErrorMsg, pwInput, "비밀번호를 확인해주세요.");
    }
  }
  // 로그인 핸들러 / 엔터기능구현
  loginBtn.addEventListener("click", loginHandler);
  loginBtn.addEventListener("keyup", (e) => {
    e.keyCode === 13 && loginHandler(e);
  });

  //이메일인풋 에러핸들러
  emailInput.addEventListener("blur", emailErrHandler);
  //패스워드인풋 에러핸들러
  pwInput.addEventListener("blur", pwErrHandler);

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

  // =================================================================
});
