import {
  isValidEmail,
} from "./utils.js";

const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

emailInput.addEventListener('blur', function() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    emailInput.classList.add('error');
    errorMessage.innerText = '이메일을 입력해주세요.';
    errorMessage.style.display = 'block';
  } else if (!isValidEmail(emailValue)) {
    emailInput.classList.add('error');
    errorMessage.innerText = '올바른 이메일 주소가 아닙니다.';
    errorMessage.style.display = 'block';
  } else {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
  }
});
