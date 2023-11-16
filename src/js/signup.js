import { signErrMsg } from "./common/errMsg.js";
import { signRegex } from "./common/regex.js";
import {
  domElements,
  inputFocusOutClassAdd,
  inputFocusOutClassRemove,
  pwToggleClick,
} from "./common/sign.js";
import { userInfo } from "./common/userInfo.js";

const { signEmail, signEmailText, signPw, signPwText, pwToggle, signBtn } =
  domElements;

const signPwCheck = document.getElementById("sign-pwCheck");
const signPwCheckText = document.getElementById("sign-pwCheck-text");
const pwCheckToggled = document.getElementById("password-check-toggled");

/**
 * 이메일 focusout
 */
function signEmailClick() {
  const value = signEmail.value;
  const { userEmail } = userInfo;
  const { emailErrMsg1, emailErrMsg2, emailErrMsg3 } = signErrMsg;
  const { emailRegex } = signRegex;

  if (value === "") {
    inputFocusOutClassAdd(signEmail, signEmailText, emailErrMsg1);
    return false;
  } else if (!emailRegex.test(value)) {
    inputFocusOutClassAdd(signEmail, signEmailText, emailErrMsg2);
    return false;
  } else if (value === userEmail) {
    inputFocusOutClassAdd(signEmail, signEmailText, emailErrMsg3);
    return false;
  } else {
    inputFocusOutClassRemove(signEmail, signEmailText, "");
  }

  return true;
}

/**
 * 비밀번호 focusout
 */
function signPwClick() {
  const value = signPw.value;
  const { pwErrMsg1 } = signErrMsg;
  const { pwMinLength, pwRegexOnlyStr, pwRegexOnlyNum } = signRegex;

  if (
    value.length < pwMinLength ||
    pwRegexOnlyStr.test(value) ||
    pwRegexOnlyNum.test(value)
  ) {
    inputFocusOutClassAdd(signPw, signPwText, pwErrMsg1);
    return false;
  } else {
    inputFocusOutClassRemove(signPw, signPwText, "");
  }

  // 비밀번호 체크와 값이 동일한경우
  if (value === signPwCheck.value)
    inputFocusOutClassRemove(signPwCheck, signPwCheckText, "");

  return true;
}

/**
 * 비밀번호 확인 focusout
 */
function singPwCheckClick() {
  const value = signPwCheck.value;
  const { pwCheckErrMsg1 } = signErrMsg;

  if (value === signPw.value) {
    inputFocusOutClassRemove(signPwCheck, signPwCheckText, "");
  } else {
    inputFocusOutClassAdd(signPwCheck, signPwCheckText, pwCheckErrMsg1);
    return false;
  }

  if (value === "") return false;

  return true;
}

/**
 * 회원가입 버튼 click
 */
function signBtnClick() {
  const signUpValues = {
    email: signEmailClick(),
    password: signPwClick(),
    passwordCheck: singPwCheckClick(),
  };

  if (signUpValues.email && signUpValues.password && signUpValues.passwordCheck)
    window.location.href = "/faq.html";
}

// 이벤트리스너
signEmail.addEventListener("focusout", signEmailClick);
signPw.addEventListener("focusout", signPwClick);
signPwCheck.addEventListener("focusout", singPwCheckClick);
signBtn.addEventListener("click", signBtnClick);
pwToggle.addEventListener("click", () => pwToggleClick(signPw, pwToggle));
pwCheckToggled.addEventListener("click", () =>
  pwToggleClick(signPwCheck, pwCheckToggled)
);
