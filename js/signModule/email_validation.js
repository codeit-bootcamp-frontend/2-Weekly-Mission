import { printError } from "./print_error.js"; 

const emailInput = document.querySelector('#sign-email');
const emailForm = emailInput.parentElement;

const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\.\-]{1,10}\.[A-za-z0-9\-]{2,3}$/;

// 비어있는지 체크
function emailEmptyCheck(e) {
  if(!emailInput.value) {
    emailInput.classList.add('error');
    printError(emailInput, '이메일을 입력해주세요.');
  } else {
    if(emailForm.querySelector('.error-message')) {
      emailForm.lastElementChild.remove();
    }
    emailValidationCheck(e);
  }
}

// 올바른 이메일인지 체크
function emailValidationCheck(e) {
  if(emailValidation.test(emailInput.value)) {
    emailInput.classList.remove('error');
    if(emailForm.querySelector('.error-message')) {
      emailForm.lastElementChild.remove();
    }
    if(document.querySelector('title').text === '회원가입') {
      usingEmail(e);
    }
  } else {
    emailInput.classList.add('error');
    printError(emailInput, '올바른 이메일 주소가 아닙니다.');
  }
}

// 사용중인 이메일인지 체크
function usingEmail(e) {
  if(emailInput.value === 'test@codeit.com') {
    emailInput.classList.add('error');
    printError(emailInput, '이미 사용 중인 이메일입니다.');
  } else {
    if(emailInput.parentElement.querySelector('.error')) {
      emailInput.classList.remove('error');
      emailInput.parentElement.lastElementChild.remove();
    }
  }
}

// 이벤트 등록
function emailCheck(em) {
  em.addEventListener('focusout', emailEmptyCheck, usingEmail);
}

export { emailInput, emailCheck, emailEmptyCheck, emailValidation };