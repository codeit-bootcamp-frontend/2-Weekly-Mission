import makeDOM from "./makeDOM.js";

const emailBox = document.querySelector('.email--box');
const emailInput = document.querySelector('#email');
const inputList = Array.from(document.querySelectorAll('input'));



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

const disappearError = (event) => {
  if(inputList.includes(event.target)) {
    event.target.classList.remove('input--error');
    const parent = event.target.parentNode;
    const lastNode = event.target.parentNode.lastChild;
    if(lastNode.classList.contains('error-message')){
      parent.removeChild(lastNode);
    }
  }
}

emailInput.addEventListener('blur', checkEmail);
inputList.forEach((element) => {element.addEventListener('focusin', disappearError)});
