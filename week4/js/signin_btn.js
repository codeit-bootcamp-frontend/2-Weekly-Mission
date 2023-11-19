import { printError } from "./signModule/print_error.js";
import { emailInput } from "./signModule/email_validation.js";
import { pwdInput } from "./signModule/pwd_validation.js";

const btn = document.querySelector('.sign-button');

function btnEmptyCheck(e) {
  e.preventDefault();
  if(emailInput.value === 'test@codeit.com' && pwdInput.value === 'codeit101') {
    location.href = "./folder.html";
  }
  else {
      emailInput.classList.add('error');
      printError(emailInput, '이메일을 확인해주세요.');
      pwdInput.classList.add('error');
      printError(pwdInput, '비밀번호를 확인해주세요.');
  }
}

function btnCheck(btn) {
  btn.addEventListener('click', btnEmptyCheck);
}

export { btn, btnCheck };