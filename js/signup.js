import makeDOM from "./makeDOM.js"

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password-check');

const confirmPassword = (e) => {
  if(e.target.id === 'password-check'){
    if(passwordInput.value === passwordCheckInput.value) return;
    else {
      if(e.target.value === '') return;
      if(e.target.parentNode.lastChild.classList.contains('error-message')) return;
      const errorMessage = makeDOM('p', {
        className:'password-error error-message',
        innerText: '비밀번호가 일치하지 않아요',
      })
      e.target.parentNode.appendChild(errorMessage);
      e.target.classList.add('input--error');
    }
  }
}

const checkPassword = (e) => {
  if(e.target.id === 'password'){
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (passwordRegex.test(e.target.value)) return;
    else {
      if(e.target.value === '') return;
      const errorMessage = makeDOM('p', {
        className:'password-error error-message',
        innerText: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
      })
      e.target.parentNode.appendChild(errorMessage);
      e.target.classList.add('input--error');
  }
  }
}

const testEmail = (e) => {
  if(e.target === emailInput) {
    if(e.target.value === 'test@codeit.com') {
      const errorMessage = makeDOM('p', {
        className:'email-error error-message',
        innerText: '이미 사용 중인 이메일입니다..',
      })
      e.target.parentNode.appendChild(errorMessage);
      e.target.classList.add('input--error');
    }
  }
};

emailInput.addEventListener('focusout', testEmail);
passwordCheckInput.addEventListener('focusout', confirmPassword);
passwordInput.addEventListener('focusout', checkPassword);
