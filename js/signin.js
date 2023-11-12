import { checkEmail, checkEmpty } from "./check.js";
import disappearError from "./disappearError.js";
import makeDOM from "./makeDOM.js";
import showError from "./showError.js";

const emailInput = document.querySelector('#email');
const signInBtn = document.querySelector('.signin--btn');

const inputList = Array.from(document.querySelectorAll('input'));

const checkEmptyEvent = (e) => {
  if(inputList.includes(e.target)) checkEmpty(e.target);
}

const disappearErrorEvent = (e) => {
  if(inputList.includes(e.target)) disappearError(e.target);
}

// const checkEmpty = (event) => {
//   if(event.target.value === '') {
//     if(event.target.id === 'email'){
//       showError(event.target, '이메일을 입력해주세요.');
//     }
//     if(event.target.classList.contains('password')) {
//       showError(event.target, '비밀번호를 입력해주세요.');
//     }
//   }
// }

// const disappearError = (event) => {
//   if(inputList.includes(event.target)) {
//     event.target.classList.remove('input--error');
//     const parent = event.target.parentNode;
//     const lastNode = event.target.parentNode.lastChild;
//     if(lastNode.classList.contains('error-message')){
//       parent.removeChild(lastNode);
//     }
//   }
// }

inputList.forEach((element) => {element.addEventListener('focusout', checkEmptyEvent)});
inputList.forEach((element) => {element.addEventListener('focusin', disappearErrorEvent)});

// const checkEmail = (e) => {
//   if(e.target === emailInput) {
//     if(e.target.value === '') return;
//     const emailValue = e.target.value.trim();
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (emailRegex.test(emailValue)) {
//       if(e.target.parentNode.lastChild.classList.contains('error-message')) {
//         emailInput.parentNode.removeChild(emailInput.parentNode.lastChild);
//         emailInput.classList.remove('input--error')
//       }
//       else return;
//     }
//     else {
//       showError(emailInput, '올바른 이메일 주소가 아닙니다.');
//     }
//   }
// };

const checkEmailEvent = (e) => {
  if(e.target === document.querySelector('#email')) checkEmail(e.target);
}

const signInTest = (e) => {
  e.preventDefault();
  if(e.target === document.querySelector('.signin--btn')){
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    if(emailInput.value !== 'test@codeit.com') {
      showError(emailInput, '이메일을 확인해주세요');
    }
    if(passwordInput.value !== 'codeit101') {
      showError(passwordInput, '비밀번호를 확인해주세요');
    }
    if(emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101'){
      window.location.href = './folder.html';
    }
  }
};

emailInput.addEventListener('input', checkEmailEvent);
emailInput.addEventListener('blur', checkEmailEvent);
signInBtn.addEventListener('click', signInTest);
