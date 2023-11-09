import { ERROR_MESSAGE, USER_EMAIL } from './../constants.js';

document.addEventListener('DOMContentLoaded', () => {
  let emailInput = document.querySelector('.sign-input[type="email"]');
  let passwordInput = document.querySelector('.sign-input[type="password');
  let warningMessage = document.querySelectorAll('.warning-message');

  emailInput.addEventListener('focusout', vaildateEmail);
  passwordInput.addEventListener('focusout', vaildatePassWord);

  function vaildateEmail() {
    if (emailInput.value != '' && isEmail(emailInput.value)) {
      emailInput.style.borderColor = '#ccd5e3';
      warningMessage[0].innerHTML = '';
    } else if (emailInput.value == '') {
      printErrorMessage(ERROR_MESSAGE.emptyEmail);
    } else if (!isEmail(emailInput.value)) {
      printErrorMessage(ERROR_MESSAGE.isNotVaildEmail);
    }
  }

  function vaildatePassWord() {
    if (passwordInput.value == '') {
      let html = `<p class="warning-message">${ERROR_MESSAGE.emptyPassWord}</p>`;
      passwordInput.style.borderColor = '#ff5b56';
      warningMessage[1].innerHTML = html;
    }
  }

  function printErrorMessage(message) {
    let html = `<p class="warning-message">${message}</p>`;
    emailInput.style.borderColor = '#ff5b56';
    warningMessage[0].innerHTML = html;
  }

  function isEmail(asValue) {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue); // 형식에 맞는 경우에만 true 리턴
  }
});
