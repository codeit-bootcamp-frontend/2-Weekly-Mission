import { ERROR_MESSAGE, USER_EMAIL, USER_PASSWORDS } from './../constants.js';

document.addEventListener('DOMContentLoaded', () => {
  let emailInput = document.querySelector('.sign-input[type="email"]');
  let passwordInput = document.querySelector('.sign-input[type="password');
  let warningMessage = document.querySelectorAll('.warning-message');
  let loginBtn = document.querySelector('.login-btn');

  emailInput.addEventListener('focusout', vaildateEmail);
  passwordInput.addEventListener('focusout', vaildatePassWord);
  loginBtn.addEventListener('click', performLogin);

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
      printErrorMessage(ERROR_MESSAGE.emptyPassWord, 1);
    }
  }

  function printErrorMessage(message, index) {
    let html = `<p class="warning-message">${message}</p>`;
    emailInput.style.borderColor = '#ff5b56';
    warningMessage[index].innerHTML = html;
  }

  function performLogin(e) {
    e.preventDefault();

    if (emailInput.value != USER_EMAIL && passwordInput.value != USER_PASSWORDS) {
      let wrongEmail = `<p class="warning-message">${ERROR_MESSAGE.wrongEmail}</p>`;
      let wrongPassWord = `<p class="warning-message">${ERROR_MESSAGE.wrongPassWord}</p>`;

      emailInput.style.borderColor = '#ff5b56';
      passwordInput.style.borderColor = '#ff5b56';

      warningMessage[0].innerHTML = wrongEmail;
      warningMessage[1].innerHTML = wrongPassWord;
    }
  }

  function isEmail(asValue) {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue); // 형식에 맞는 경우에만 true 리턴
  }
});
