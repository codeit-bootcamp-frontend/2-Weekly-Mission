import { emailInput, emailEmptyCheck, emailValidation } from "./signModule/email_validation.js";
import { pwdInput, pwdEmptyCheck, pwdValidation } from "./signModule/pwd_validation.js";
import { pwdConfirmInput, pwdConfirm } from "./signModule/pwd_confirm.js";

const btn = document.querySelector('.sign-button');

let userEmail = 'test@codeit.com'

function btnSignupCheck(e) {
  e.preventDefault();
  if(emailInput.value && emailInput.value !== userEmail && emailValidation.test(emailInput.value)) {
    if(pwdInput.value && pwdConfirmInput.value === pwdInput.value && pwdValidation.test(pwdInput.value)) {
      location.href = './folder.html';
    }
  }
}

function btnCheck(btn) {
  btn.addEventListener('click', btnSignupCheck);
  btn.addEventListener('click', emailEmptyCheck);
  btn.addEventListener('click', pwdEmptyCheck);
  btn.addEventListener('click', pwdConfirm);
}

export { btn, btnCheck };