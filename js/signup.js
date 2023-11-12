import makeDOM from "./makeDOM.js"
import { checkEmail, checkEmpty, checkPassword } from "./check.js";
import showError from "./showError.js";
import disappearError from "./disappearError.js";
import showPassword from "./showPassword.js";

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password-check');

const inputList = Array.from(document.querySelectorAll('input'));

const signUpBtn = document.querySelector('.signup--btn');

const checkEmptyEvent = (e) => {
  if(inputList.includes(e.target)) checkEmpty(e.target);
}

const disappearErrorEvent = (e) => {
  if(inputList.includes(e.target)) disappearError(e.target);
}

inputList.forEach((element) => {element.addEventListener('focusout', checkEmptyEvent)});
inputList.forEach((element) => {element.addEventListener('focusin', disappearErrorEvent)});

// const confirmPassword = (e) => {
//   if(e.target.id === 'password-check'){
//     if(passwordInput.value === passwordCheckInput.value) return true;
//     else {
//       if(e.target.value === '') return;
//       if(e.target.parentNode.lastChild.classList.contains('error-message')) return;
//       showError(e.target, '비밀번호가 일치하지 않아요.');
//       return false;
//     }
//   }
// }

const confirmPassword = (passwordTag, passwordCheckTag) => {
    if(passwordTag.value === passwordCheckTag.value) return true;
    else {
      if(passwordCheckTag.value === '') return;
      if(passwordCheckTag.parentNode.lastChild.className ==='error-message') return;
      showError(passwordCheckTag, '비밀번호가 일치하지 않아요.');
      return false;
    }
}

const confirmPasswordEvent = (e) => {
  if(e.target.id === 'password-check') confirmPassword(passwordInput, passwordCheckInput);
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

const checkEmailEvent = (e) => {
  if(e.target === document.querySelector('#email')) checkEmail(e.target);
}

const testSignUp = (e) => {
  e.preventDefault();
  if(e.target === document.querySelector('.signup--btn')) {
    if(checkEmail(emailInput) && checkPassword(passwordInput) && confirmPassword(passwordInput, passwordCheckInput)){
      window.location.href = './folder.html';
      console.log('성공?');
    } else {
      console.log('실패?');
      inputList.forEach( element => checkEmpty(element));
      checkEmail(emailInput);
      checkPassword(passwordInput);
      confirmPassword(passwordInput, passwordCheckInput);
    }
  }
}
// const signInTest = (e) => {
//   e.preventDefault();
//   if(e.target === document.querySelector('.signin--btn')){
//     const emailInput = document.querySelector('#email');
//     const passwordInput = document.querySelector('#password');

//     if(emailInput.value !== 'test@codeit.com') {
//       showError(emailInput, '이메일을 확인해주세요');
//     }
//     if(passwordInput.value !== 'codeit101') {
//       showError(passwordInput, '비밀번호를 확인해주세요');
//     }
//     if(emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101'){
//       window.location.href = './folder.html';
//     }
//   }
// };

emailInput.addEventListener('input', checkEmailEvent);
emailInput.addEventListener('blur', checkEmailEvent);
emailInput.addEventListener('focusout', testEmail);
passwordCheckInput.addEventListener('focusout', confirmPasswordEvent);
passwordInput.addEventListener('focusout', checkPasswordEvent);
emailInput.addEventListener('input', testEmail);
// passwordCheckInput.addEventListener('input', confirmPasswordEvent);
passwordInput.addEventListener('input', checkPassword);
document.body.addEventListener('click', showPassword);
signUpBtn.addEventListener('click', testSignUp);
document.addEventListener('keydown', function (e) {
  e.preventDefault();
  if (e.key === 'Enter' || e.keyCode === 13) {
    document.querySelector('.signup--btn').click();
  }
});
