import makeDOM from "./makeDOM.js";

const inputList = Array.from(document.querySelectorAll('input'));

const checkEmpty = (event) => {
  if(event.target.value === '') {
    if(event.target.id === 'email'){
      const errorMessage = makeDOM('p', {
        className:'email-error error-message',
        innerText: '이메일을 입력해주세요',
      })
      event.target.parentNode.appendChild(errorMessage);
      event.target.classList.add('input--error');
    }
    if(event.target.id === 'password') {
      const errorMessage = makeDOM('p', {
        className:'password-error error-message',
        innerText: '비밀번호를 입력해주세요',
      })
      event.target.parentNode.appendChild(errorMessage);
      event.target.classList.add('input--error');
    }
  }
}

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

const showPassword = (e) => {
  if(e.target === document.querySelector('.eye')){
    const eyeIcon = document.querySelector('.eye');
    const passwordInput = document.querySelector('#password');
    eyeIcon.classList.toggle('eye-off');
    eyeIcon.classList.toggle('eye-on');
    if(eyeIcon.classList.contains('eye-off')){
      eyeIcon.src = './assets/icon/eye-on.svg';
      passwordInput.type = 'text';
    }
    if(eyeIcon.classList.contains('eye-on')){
      eyeIcon.src = './assets/icon/eye-off.svg';
      passwordInput.type = 'password';
    }
  }
}

inputList.forEach((element) => {element.addEventListener('focusout', checkEmpty)});
inputList.forEach((element) => {element.addEventListener('focusin', disappearError)});
window.addEventListener('click', showPassword);
