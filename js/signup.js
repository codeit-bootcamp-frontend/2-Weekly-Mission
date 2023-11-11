import makeDOM from "./makeDOM.js"

const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password-check');

const confirmPassword = (e) => {
  if(e.target.id === 'password-check'){
    if(passwordInput.value === passwordCheckInput.value) return;
    else {
      if(e.target.value === '') return;
      const errorMessage = makeDOM('p', {
        className:'password-error error-message',
        innerText: '비밀번호가 일치하지 않아요',
      })
      e.target.parentNode.appendChild(errorMessage);
      e.target.classList.add('input--error');
    }
  }
}

passwordCheckInput.addEventListener('focusout', confirmPassword)
