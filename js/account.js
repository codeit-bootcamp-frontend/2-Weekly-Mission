import makeDOM from "./makeDOM.js";

const emailBox = document.querySelector('.email--box');
const emailInput = document.querySelector('#email');


const checkEmail = (event) => {
  if(event.target === emailInput) {
    if(event.target.value === '') {
      const errorMessage = makeDOM('p', {
        className:'email-error error-message',
        innerText: '이메일을 입력해주세요',
      })
      emailBox.appendChild(errorMessage);
      emailInput.classList.add('input--error');
    }
  }
};

emailInput.addEventListener('blur', checkEmail);
