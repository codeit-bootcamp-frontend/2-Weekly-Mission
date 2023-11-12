import { emailCheck } from "./check.js";
import makeDOM from "./makeDOM.js";
import showError from "./showError.js";

const emailInput = document.querySelector('#email');
const signInBtn = document.querySelector('.signin--btn');

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

const emailCheckEvent = (e) => {
  if(e.target === document.querySelector('#email')) emailCheck(e.target);
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

emailInput.addEventListener('input', emailCheckEvent);
emailInput.addEventListener('blur', emailCheckEvent);
signInBtn.addEventListener('click', signInTest);
