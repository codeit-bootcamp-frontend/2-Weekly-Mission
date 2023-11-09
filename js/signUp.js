import { submitBtn, emailInput, passwordInput, inputForm } from "./modules/domSelectors.js";
import { regEmail, regPassword } from "./modules/regexPatterns.js";
import { authEvent, specifyWarningPosition } from "./modules/authModule.js";
import userData from "./database/userData.js";

authEvent();

const formFocusOutHandler = inputForm.addEventListener("focusout", (e) => {
  if (e.target.id === "input-id") {
    if (e.target.value === "") {
      specifyWarningPosition(emailInput, "이메일을 입력해주세요.");
    } else if (!regEmail.test(e.target.value)) {
      specifyWarningPosition(emailInput, "올바른 이메일 주소가 아닙니다.");
    } else if (e.target.value === "test@codeit.com") {
      specifyWarningPosition(emailInput, "이미 사용 중인 이메일입니다.");
    }
  } else if (e.target.id === "input-pwd") {
    if (e.target.value === "") {
      specifyWarningPosition(passwordInput, "비밀번호를 입력해주세요.");
    } else if (!regPassword.test(passwordInput.value)) {
      specifyWarningPosition(passwordInput, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    }
  }
});
