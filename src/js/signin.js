import { signErrMsg } from "./common/errMsg.js";
import { userInfo } from "./common/userInfo.js";
import {
  domElements,
  inputFocusOutClassAdd,
  inputFocusOutClassRemove,
  pwToggleClick,
} from "./common/sign.js";

const { signEmail, signEmailText, signPw, signPwText, pwToggle, signBtn } =
  domElements;

/**
 * 이메일 focusout
 */
function signEmailClick() {
  const { emailErrMsg1 } = signErrMsg;

  if (signEmail.value === "") {
    inputFocusOutClassAdd(signEmail, signEmailText, emailErrMsg1);
  } else {
    inputFocusOutClassRemove(signEmail, signEmailText, "");
  }
}

/**
 * 비밀번호 focusout
 */
function signPwClick() {
  const { pwErrMsg2 } = signErrMsg;

  if (signPw.value === "") {
    inputFocusOutClassAdd(signPw, signPwText, pwErrMsg2);
  } else {
    inputFocusOutClassRemove(signPw, signPwText, "");
  }
}

/**
 * 로그인
 *
 */
function signBtnClick() {
  const { userEmail, userPassword } = userInfo;
  const { emailErrMsg4, pwErrMsg3 } = signErrMsg;

  if (userEmail === signEmail.value && userPassword === signPw.value) {
    window.location.href = "/faq.html";
  } else {
    inputFocusOutClassAdd(signEmail, signEmailText, emailErrMsg4);
    inputFocusOutClassAdd(signPw, signPwText, pwErrMsg3);
  }
}

// 이벤트리스너
signBtn.addEventListener("click", signBtnClick);
signEmail.addEventListener("focusout", signEmailClick);
signPw.addEventListener("focusout", signPwClick);
pwToggle.addEventListener("click", () => pwToggleClick(signPw, pwToggle));
