//1. 공통: 이메일 input에서 focus out 할 때
//값이 없을 경우 input에 빨강색 테두리와 아래에 “이메일을 입력해주세요.” 빨강색 에러 메세지가 보입니다

const emailInput = document.getElementById("email");
const emailErrorMessage = emailInput.nextElementSibling;

function blankEmail(event) {
  if (event.target.value === ""){
    event.target.classList.add("input-error");
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
  } else {
    event.target.classList.remove("input-error");
  }
}

function resetEmailInput(event) {
  emailErrorMessage.textContent = "";
}

emailInput.addEventListener("focusout", blankEmail);
emailInput.addEventListener("focusin", resetEmailInput);

//2. 공통: 이메일 input에서 focus out 할 때, 
//이메일 형식에 맞지 않는 값이 있는 경우 input에 빨강색 테두리와 아래에 “올바른 이메일 주소가 아닙니다.” 빨강색 에러 메세지가 보입니다

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function invalidEmail(event) {
  if (!(event.target.value === "") && !(emailPattern.test(event.target.value))){
    event.target.classList.add("input-error");
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
  }
}

emailInput.addEventListener("focusout", invalidEmail);

//3. 공통: 이메일 input에서 focus out 일 때
//input 값이 test@codeit.com 일 경우 input에 빨강색 테두리와 아래에 “이미 사용 중인 이메일입니다.” 빨강색 에러 메세지가 보입니다.

function duplicateEmail(event) {
  if (event.target.value === "test@codeit.com"){
    event.target.classList.add("input-error");
    emailErrorMessage.textContent = "이미 사용 중인 이메일입니다.";
  }
}

emailInput.addEventListener("focusout", duplicateEmail);