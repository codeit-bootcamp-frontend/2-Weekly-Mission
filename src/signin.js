function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}



function validEmail () {
  const Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  const emailError = document.querySelector('.email-error');
  const emailInput = document.querySelector('#email');
  emailError.classList.remove('inputError');
  

  if(emailInput.value === ''){
    emailError.textContent = '이메일을 입력해주세요.'
    emailError.classList.add('inputError')
    emailInput.classList.add('inputErrorBorder')
  }
  else if(!Regex.test(emailInput.value)){  
    emailError.textContent = '올바른 이메일 주소가 아닙니다.'
    emailError.classList.add('inputError')
    emailInput.classList.add('inputErrorBorder')
  }
  else{
    emailError.textContent = ''
    emailError.classList.remove('inputError')
    emailInput.classList.remove('inputErrorBorder')
  }
}



const emailInput = document.querySelector('#email')

emailInput.addEventListener('focusout', validEmail)




