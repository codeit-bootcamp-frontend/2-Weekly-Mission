// import하면 함수들 declared but its value is never read 메세지 뜨면서 기능 동작 안함.
// import { TEST_EMAIL, TEST_PASSWORD } from '../util/constants';

const testEmail = 'test@codeit.com';
const testPassword = 'sprint101';

let inputValue = {
  email: '',
  password: '',
};

let isEmailCorrect = false;
let isPasswordCorrect = false;
let isPossibleSignIn = isEmailCorrect && isPasswordCorrect;

const updateSignInValid = () => {
  isPossibleSignIn = isEmailCorrect && isPasswordCorrect;
};

const handleEmailInput = () => {
  const emailInput = document.getElementById('emailInput');
  const emailValue = emailInput.value;

  if (emailValue === testEmail) {
    isEmailCorrect = true;
    inputValue.emailValue = emailValue;
  } else {
    isEmailCorrect = false;
  }

  updateSignInValid();
};

const handlePasswordInput = () => {
  const passwordInput = document.getElementById('passwordInput');
  const passwordValue = passwordInput.value;

  if (passwordValue === testPassword) {
    isPasswordCorrect = true;
    inputValue.passwordValue = passwordValue;
    // console.log(testPassword);
    // console.log(passwordValue);
  } else {
    isPasswordCorrect = false;
  }

  updateSignInValid();
};

const onClickSignInButton = async (e) => {
  e.preventDefault();
  // console.log(isPossibleSignIn);

  const emailIncorrectMessage = document.getElementById('emailIncorrectMessage');
  const passwordIncorrectMessage = document.getElementById('passwordIncorrectMessage');
  const passwordEmptyMessage = document.getElementById('passwordEmptyMessage');

  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');
  const passwordValue = passwordInput.value;

  inputValue = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  // console.log(inputValue);

  if (isPossibleSignIn) {
    emailIncorrectMessage.style.display = 'none';
    emailInput.classList.remove('invalid-input');
    passwordIncorrectMessage.style.display = 'none';
    passwordInput.classList.remove('invalid-input');
    try {
      const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputValue),
      });
      // console.log(response.status);

      const result = response.status;

      if (result === 200) {
        window.location.href = '/folder.html';
      }
    } catch (error) {
      console.log('error:', error);
    }
  } else {
    emailIncorrectMessage.style.display = 'none';
    passwordIncorrectMessage.style.display = 'none';
    passwordEmptyMessage.style.display = 'none';
    emailInput.classList.remove('invalid-input');
    passwordInput.classList.remove('invalid-input');

    if (!isEmailCorrect) {
      emailIncorrectMessage.style.display = 'block';
      emailInput.classList.add('invalid-input');
    }

    if (!isPasswordCorrect) {
      if (!passwordValue) {
        passwordEmptyMessage.style.display = 'block';
        passwordInput.classList.add('invalid-input');
      } else {
        passwordIncorrectMessage.style.display = 'block';
        passwordInput.classList.add('invalid-input');
      }
    }
  }
};
