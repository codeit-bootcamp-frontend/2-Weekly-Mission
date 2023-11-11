import makeDOM from "./makeDOM.js";
import showError from "./showError.js";

const emailInput = document.querySelector('#email');
const signInBtn = document.querySelector('.signin--btn');

const checkEmail = (e) => {
  if(e.target === emailInput) {
    if(e.target.value === '') return;
    const emailValue = e.target.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(emailValue)) {
      if(e.target.parentNode.lastChild.classList.contains('error-message')) {
        console.log(e.target.parentNode.lastChild.classList.contains('error-message'));
        emailInput.parentNode.removeChild(emailInput.parentNode.lastChild);
        emailInput.classList.remove('input--error')
      }
      else return;
    }
    else {
      showError(emailInput, '올바른 이메일 주소가 아닙니다.');
    //   const errorMessage = makeDOM('p', {
    //     className: 'email-error error-message',
    //     innerText: '올바른 이메일 주소가 아닙니다.'
    //   })
    //   if(document.querySelector('.error-message')) return;
    //   emailInput.parentNode.appendChild(errorMessage);
    //   emailInput.classList.add('input--error');
    // } 
    }
  }
};
const signInTest = (e) => {
  e.preventDefault();
  if(e.target === document.querySelector('.signin--btn')){
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    if(emailInput.value !== 'test@codeit.com') {
      showError(emailInput, '이메일을 확인해주세요');
      // const errorMessage = makeDOM('p', {
      //   className: 'email-error error-message',
      //   innerText: '이메일을 확인해주세요.'
      // })
      // // if(document.querySelector('.error-message')) return;
      // emailInput.parentNode.appendChild(errorMessage);
      // emailInput.classList.add('input--error');
    }
    if(passwordInput.value !== 'codeit101') {
      showError(passwordInput, '비밀번호를 확인해주세요');
      // const errorMessage = makeDOM('p', {
      //   className: 'password-error error-message',
      //   innerText: '비밀번호를 확인해주세요.'
      // })
      // // if(document.querySelector('.error-message')) return;
      // passwordInput.parentNode.appendChild(errorMessage);
      // passwordInput.classList.add('input--error');
    }
    if(emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101'){
      window.location.href = './folder.html';
    }
  }
};

emailInput.addEventListener('input', checkEmail);
emailInput.addEventListener('blur', checkEmail);
signInBtn.addEventListener('click', signInTest);
