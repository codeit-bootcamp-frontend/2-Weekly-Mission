"use strict";

import {
  emailErrHandler,
  pwErrHandler,
  emailInput,
  pwInput,
} from "./module/signForm/inputErrMsg.mjs";

import { pwIcon, pwiconChangeHandler } from "./module/signForm/iconEvent.mjs";

document.addEventListener("DOMContentLoaded", function () {
  // =================================================================

  const loginBtn = document.querySelector("#login_btn");

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
  pwIcon.addEventListener("click", pwiconChangeHandler);

  // =================================================================
});
