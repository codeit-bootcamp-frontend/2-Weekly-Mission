import { printError } from "./print_error.js";
import { pwdInput } from "./pwd_validation.js";

const pwdConfirmInput = document.querySelector('#sign-password-confirm');
const pwdConfirmForm = pwdConfirmInput.parentElement;

// 비밀번호 확인
function pwdConfirm(e) {
  if(!pwdConfirmInput.value) {
    pwdConfirmInput.classList.add('error');
    printError(pwdConfirmInput, '비밀번호를 확인해주세요.');
  } else {
    if(pwdConfirmInput.value !== pwdInput.value) {
      pwdConfirmInput.classList.add('error');
      printError(pwdConfirmInput, '비밀번호가 일치하지 않아요.');
    } else {
      pwdConfirmInput.classList.remove('error');
      if(pwdConfirmForm.querySelector('.error-message')) {
        pwdConfirmForm.lastElementChild.remove();
      }
    }
  }
};

function pwdConfirmCheck(e) {
  pwdConfirmInput.addEventListener('focusout', pwdConfirm);
};

export { pwdConfirmInput, pwdConfirm, pwdConfirmCheck };