import makeDOM from "./makeDOM.js"
import { checkEmail, checkEmpty, checkPassword } from "./check.js";
import showError from "./showError.js";
import disappearError from "./disappearError.js";

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password-check');

const inputList = Array.from(document.querySelectorAll('input'));

const checkEmptyEvent = (e) => {
  if(inputList.includes(e.target)) checkEmpty(e.target);
}

const disappearErrorEvent = (e) => {
  if(inputList.includes(e.target)) disappearError(e.target);
}

inputList.forEach((element) => {element.addEventListener('focusout', checkEmptyEvent)});
inputList.forEach((element) => {element.addEventListener('focusin', disappearErrorEvent)});

const confirmPassword = (e) => {
  if(e.target.id === 'password-check'){
    if(passwordInput.value === passwordCheckInput.value) return;
    else {
      if(e.target.value === '') return;
      if(e.target.parentNode.lastChild.classList.contains('error-message')) return;
      showError(e.target, '비밀번호가 일치하지 않아요.');
    }
  }
}

const checkPasswordEvent = (e) => {
  if(e.target.id === 'password') checkPassword(e.target);
}

// const checkPassword = (e) => {
//   if(e.target.id === 'password'){
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
//     if (passwordRegex.test(e.target.value)) return;
//     else {
//       if(e.target.value === '') return;
//       showError(e.target, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
//     }
//   }
// }

const testEmail = (e) => {
  if(e.target === emailInput) {
    if(e.target.value === 'test@codeit.com') {
      showError(e.target, '이미 사용 중인 이메일입니다.');
    }
  }
};

emailInput.addEventListener('focusout', testEmail);
passwordCheckInput.addEventListener('focusout', confirmPassword);
passwordInput.addEventListener('focusout', checkPasswordEvent);
emailInput.addEventListener('input', testEmail);
passwordCheckInput.addEventListener('input', confirmPassword);
passwordInput.addEventListener('input', checkPassword);
