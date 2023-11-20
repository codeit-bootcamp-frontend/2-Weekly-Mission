import { printError } from "./print_error.js";

const pwdInput = document.querySelector('#sign-password');
const pwdForm = pwdInput.parentElement;

const pwdValidation = /^(?=.*\d)(?=^.{8,15}$)(?=.*[a-zA-Z]).*$/;

// 비어있는지 체크
function pwdEmptyCheck(e) {
  if(!pwdInput.value) {
    pwdInput.classList.add('error');
    printError(pwdInput, '비밀번호를 입력해주세요.');
  } else if(pwdInput.value) {
    if(pwdForm.querySelector('.error-message')) {
      pwdForm.lastElementChild.remove();
    }
    pwdValidationCheck(e);
  }
}

// 올바른 형식인지 체크
function pwdValidationCheck(e) {
  if(pwdValidation.test(pwdInput.value)) {
    pwdInput.classList.remove('error');
    if(pwdForm.querySelector('.error-message')) {
      pwdForm.lastElementChild.remove();
    }
  } else {
    printError(pwdInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    pwdInput.classList.add('error');
  }
}

// 이벤트 등록
function pwdCheck(pw) {
  pw.addEventListener('focusout', pwdEmptyCheck);
}

export { pwdInput, pwdCheck, pwdEmptyCheck, pwdValidation };