import makeDOM from "./makeDOM.js";

const emailInput = document.querySelector('#email');

const checkEmail = (e) => {
  if(e.target === emailInput) {
    console.log(`'event.target = ${e.target}`);
    const emailValue = e.target.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(emailValue)){
      emailInput.classList.remove('input--error');
      emailInput.parentNode.removeChild(emailInput.parentNode.lastChild);
    }
    else {
      if(e.target.value === '') return;
      else {
        const errorMessage = makeDOM('p', {
          className: 'email-error error-message',
          innerText: '올바른 이메일 주소가 아닙니다.'
        })
        if(document.querySelector('.error-message')) return;
        emailInput.parentNode.appendChild(errorMessage);
        emailInput.classList.add('input--error');
      }
    } 
  }
};

emailInput.addEventListener('input', checkEmail);
emailInput.addEventListener('blur', checkEmail);
