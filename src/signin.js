import { ERROR_MESSAGE, USER_EMAIL, USER_PASSWORD } from './../constants.js';

document.addEventListener('DOMContentLoaded', () => {
  let emailInput = document.querySelector('.sign-input[type="email"]');
  let passwordInput = document.querySelector('.sign-input[type="password');
  let warningMessage = document.querySelectorAll('.warning-message');
  let loginBtn = document.querySelector('.login-btn');
  let eyeBtn = document.querySelector('.eye-button');
  let eyeBtnIcon = eyeBtn.firstElementChild;

  emailInput.addEventListener('focusout', vaildateEmail);
  passwordInput.addEventListener('focusout', vaildatePassWord);
  loginBtn.addEventListener('click', performLogin);
  eyeBtn.addEventListener('click', showAndHidePassword);

  function vaildateEmail() {
    if (emailInput.value != '' && isEmail(emailInput.value)) {
      emailInput.style.borderColor = '#ccd5e3';
      warningMessage[0].innerHTML = '';
    } else if (emailInput.value == '') {
      printErrorMessage(ERROR_MESSAGE.emptyEmail, 0);
    } else if (!isEmail(emailInput.value)) {
      printErrorMessage(ERROR_MESSAGE.isNotVaildEmail, 0);
    }
  }

  function vaildatePassWord() {
    if (passwordInput.value == '') {
      let html = `<p class="warning-message">${ERROR_MESSAGE.emptyPassWord}</p>`;
      passwordInput.style.borderColor = '#ff5b56';
      warningMessage[1].innerHTML = html;
    }
  }

  function printErrorMessage(message, index) {
    let html = `<p class="warning-message">${message}</p>`;
    emailInput.style.borderColor = '#ff5b56';
    warningMessage[index].innerHTML = html;
  }

  function performLogin(e) {
    e.preventDefault();

    if (emailInput.value != USER_EMAIL || passwordInput.value != USER_PASSWORD) {
      if (emailInput.value != USER_EMAIL) {
        let wrongEmail = `<p class="warning-message">${ERROR_MESSAGE.wrongEmail}</p>`;
        emailInput.style.borderColor = '#ff5b56';
        warningMessage[0].innerHTML = wrongEmail;
      }
      if (passwordInput.value != USER_PASSWORD) {
        let wrongPassWord = `<p class="warning-message">${ERROR_MESSAGE.wrongPassWord}</p>`;
        passwordInput.style.borderColor = '#ff5b56';
        warningMessage[1].innerHTML = wrongPassWord;
      } else if (passwordInput.value != '' || passwordInput.value == USER_PASSWORD) {
        passwordInput.style.borderColor = '#ccd5e3';
        warningMessage[1].innerHTML = '';
      }
    } else {
      window.location.href = '/folder.html';
    }
  }

  function showAndHidePassword() {
    if (passwordInput.type == 'password') {
      passwordInput.type = 'text';
      eyeBtnIcon.src = './images/eye-on.svg';
    } else if (passwordInput.type == 'text') {
      passwordInput.type = 'password';
      eyeBtnIcon.src = './images/eye-off.svg';
    }
  }

  function isEmail(asValue) {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue); // 형식에 맞는 경우에만 true 리턴
  }
});
