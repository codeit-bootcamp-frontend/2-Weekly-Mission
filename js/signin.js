import { checkEmail, checkEmpty } from "./check.js";
import deleteError from "./deleteError.js";
import makeDOM from "./makeDOM.js";
import showError from "./showError.js";
import showPassword from "./showPassword.js";

const emailInput = document.querySelector('#email');
const signInBtn = document.querySelector('.signin--btn');

const inputList = Array.from(document.querySelectorAll('input'));

const checkEmptyEvent = (e) => {
  if(inputList.includes(e.target)) checkEmpty(e.target);
}

const deleteErrorEvent = (e) => {
  if(inputList.includes(e.target)) deleteError(e.target);
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
inputList.forEach((element) => {element.addEventListener('focusin', deleteErrorEvent)});

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

const showPasswordEvent = (e) => {
  if(e.target.classList.contains('eye')) showPassword(e.target);
}

// const showPassword = (tag) => {
//   if(tag.classList.contains('eye')){
//     const eyeIcon = tag;
//     const passwordInput = tag.parentNode.children[1];
//     eyeIcon.classList.toggle('eye-off');
//     eyeIcon.classList.toggle('eye-on');
//     if(eyeIcon.classList.contains('eye-off')){
//       eyeIcon.src = './assets/icon/eye-on.svg';
//       passwordInput.type = 'text';
//     }
//     if(eyeIcon.classList.contains('eye-on')){
//       eyeIcon.src = './assets/icon/eye-off.svg';
//       passwordInput.type = 'password';
//     }
//   }
// }

emailInput.addEventListener('input', checkEmailEvent);
emailInput.addEventListener('blur', checkEmailEvent);
signInBtn.addEventListener('click', signInTest);
document.body.addEventListener('click', showPasswordEvent);
