import { API_URL } from "../constant/constant.js";
import { checkAccessToken, checkEmail, checkEmpty } from "./check.js";
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

const checkSignIn = async (emailInput, passwordInput) => {
  try {
    const response = await fetch(`${API_URL}/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailInput.value, 
        password: passwordInput.value
      })
    });
    if(response.ok) {
      window.location.href = './folder.html';
      const { data } = await response.json();
      localStorage.setItem('accessToken', data.accessToken);
    } else {
      showError(emailInput, '이메일/비밀번호를 확인해주세요');
      showError(passwordInput, '이메일/비밀번호를 확인해주세요');
    }
  } catch (error) {
    alert(error);
  }
};

const testSignIn = (e) => {
  e.preventDefault();
  if(e.target === document.querySelector('.signin--btn')){
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    checkSignIn(emailInput, passwordInput);
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
document.addEventListener('DOMContentLoaded', checkAccessToken);
