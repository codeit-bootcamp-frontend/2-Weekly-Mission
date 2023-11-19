import {
  isValidEmail,
  isValidPassword,
} from "./utils.js";

const login = document.querySelector('.login')
const emailSigninInput = document.getElementById('email');
const passwordSigninInput = document.getElementById('password');
const loginErrorMessage = document.getElementById('error-message');


login.addEventListener('click', function() {
  const emailSigninValue = emailSigninInput.value;
  const passwordSigninValue = passwordSigninInput.value;

  if (emailSigninValue === 'test@codeit.com' && passwordSigninValue === 'codeit101') {
    location.href = 'folder.html';
  }
});