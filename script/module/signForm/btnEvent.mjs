"use strict";

import {
  emailErrHandler,
  pwErrHandler,
  pwCkdErrHandler,
  emailInput,
  pwInput,
  showError,
  emailErrorMsg,
  pwErrorMsg,
  pwCheckErrorMsg,
  pwCheckInput,
} from "./inputErrMsg.mjs";

const loginBtn = document.querySelector("#login_btn");
const signUpBtn = document.querySelector("#signup_btn");

async function loginBtnHandler(e) {
  e.preventDefault();

  const userInfo = {
    email: emailInput.value.trim(),
    password: pwInput.value.trim(),
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    });

    const result = response.status;
    console.log(result);

    if (result === 200) {
      window.location.href = "/folder";
      console.log("로그인 성공");
    } else {
      showError(emailErrorMsg, emailInput, "이메일을 확인해주세요.");
      showError(pwErrorMsg, pwInput, "비밀번호를 확인해주세요.");
      console.log("로그인 실패");
    }
  } catch (e) {
    console.log(e);
  }
}

async function signUpBtnHandler(e) {
  e.preventDefault();

  const emailInfo = { email: emailInput.value.trim() };
  const userInfo = {
    email: emailInput.value.trim(),
    password: pwInput.value.trim(),
  };
  const pwCkd = pwCheckInput.value.trim();

  try {
    const emailcKdResponse = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        body: JSON.stringify(emailInfo),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (emailcKdResponse.status === 409) {
      return;
    }

    const signUpResponse = await fetch(
      "https://bootcamp-api.codeit.kr/api/sign-up",
      {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (signUpResponse.status === 200 && userInfo.password === pwCkd) {
      emailErrHandler();
      pwErrHandler();
      pwCkdErrHandler(); // 각 인풋에대한 에러검사

      window.location.href = "/folder";
      console.log("로그인 성공");
    }
  } catch (e) {
    console.log(e);
  }
}

export { loginBtn, loginBtnHandler, signUpBtnHandler, signUpBtn };
