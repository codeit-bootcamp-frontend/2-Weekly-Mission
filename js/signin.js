import { TEST_EMAIL, TEST_PASSWORD } from "../constant/constant.js";
import { checkEmail, checkEmpty } from "./check.js";
import deleteError from "./deleteError.js";
import showError from "./showError.js";
import togglePasswordVisibility from "./togglePasswordVisibility.js";

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signInBtn = document.querySelector('.signin--btn');


const checkEmptyEvent = (e) => {
  if(e.target.id === 'email' || e.target.id === 'password') checkEmpty(e.target);
}

const deleteErrorEvent = (e) => {
  if(e.target.id === 'email' || e.target.id === 'password') deleteError(e.target);
}

const checkEmailEvent = (e) => {
  if(e.target === emailInput) checkEmail(e.target);
}

const togglePasswordVisibilityEvent = (e) => {
  if(e.target.classList.contains('eye')) togglePasswordVisibility(e.target);
}

const testSignIn = (e) => {
  e.preventDefault();
  if(e.target === document.querySelector('.signin--btn')){
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    
    if(emailInput.value === TEST_EMAIL && passwordInput.value === TEST_PASSWORD){
      window.location.href = './folder.html';
    } else {
      showError(emailInput, '이메일/비밀번호를 확인해주세요');
      showError(passwordInput, '이메일/비밀번호를 확인해주세요');
    }
  }
};

emailInput.addEventListener('focusout', checkEmptyEvent);
passwordInput.addEventListener('focusout', checkEmptyEvent);
emailInput.addEventListener('focusin', deleteErrorEvent);
passwordInput.addEventListener('focusin', deleteErrorEvent);
emailInput.addEventListener('input', checkEmailEvent);
emailInput.addEventListener('blur', checkEmailEvent);
signInBtn.addEventListener('click', testSignIn);
document.querySelector('.eye').addEventListener('click', togglePasswordVisibilityEvent);
