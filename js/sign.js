document.addEventListener('DOMContentLoaded', function () {
  var emailInput = document.querySelector('.sign-input[type="email"]');
  var passwordInput = document.querySelector('.sign-input[type="password"]');
  var eyeButton = document.querySelector('.eye-button');
  var emailErrorMessage = document.createElement('p');
  var passwordErrorMessage = document.createElement('p');

  emailErrorMessage.textContent = '이메일을 입력해주세요.';
  passwordErrorMessage.textContent = '비밀번호를 입력해주세요.';

  emailErrorMessage.classList.add('error-message');
  passwordErrorMessage.classList.add('error-message');

  emailInput.parentNode.appendChild(emailErrorMessage);
  passwordInput.parentNode.appendChild(passwordErrorMessage);

  // 이메일 입력 포커스아웃 될 때
  emailInput.addEventListener('focusout', function () {
    validateEmail();
  });

  // 패스워드 입력 포커스아웃 될 때
  passwordInput.addEventListener('focusout', function () {
    validatePassword();
  });

  // 눈모양 아이콘 관련
  eyeButton.addEventListener('click', function () {
    togglePasswordVisibility();
  });

  document.querySelector('.sign-form').addEventListener('submit', function (event) {    
    event.preventDefault();

    validateEmail();
    validatePassword();

    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value.trim();

    // 정해진 값을 입력하는 부분
    if (emailValue === 'test@codeit.com' && passwordValue === 'codeit101') {
      window.location.href = '/folder';
    } else {
      // 잘못된 이메일과 패스워드를 입력했을 때
      if (emailValue !== 'test@codeit.com') {
        emailErrorMessage.textContent = '이메일을 확인해주세요.';
        emailErrorMessage.style.display = 'block';
      }

      if (passwordValue !== 'codeit101') {
        passwordErrorMessage.textContent = '비밀번호를 확인해주세요.';
        passwordErrorMessage.style.display = 'block';
        adjustEyeButtonPosition();
      } else {
        resetEyeButtonPosition();
      }
    }
  });

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword() {
    var passwordValue = passwordInput.value.trim();

    if (passwordValue === '') {
      passwordErrorMessage.textContent = '비밀번호를 입력해주세요.';
      passwordErrorMessage.style.display = 'block';
      adjustEyeButtonPosition();
    } else {
      passwordErrorMessage.style.display = 'none';
      resetEyeButtonPosition();
    }
  }

  function validateEmail() {
    var emailValue = emailInput.value.trim();

    if (emailValue === '') {
      emailErrorMessage.style.display = 'block';
      adjustEyeButtonPosition();
    } else if (!isValidEmail(emailValue)) {
      emailErrorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
      emailErrorMessage.style.display = 'block';
      adjustEyeButtonPosition();
    } else {
      emailErrorMessage.style.display = 'none';
      resetEyeButtonPosition();
    }
  }

  function togglePasswordVisibility() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeButton.querySelector('img').src = './images/eye-on.svg'; 
    } else {
      passwordInput.type = 'password';
      eyeButton.querySelector('img').src = './images/eye-off.svg'; 
    }
  }

  function adjustEyeButtonPosition() {
    eyeButton.style.bottom = '5rem'; 
  }

  function resetEyeButtonPosition() {
    eyeButton.style.bottom = '2.2rem'; 
  }
});
