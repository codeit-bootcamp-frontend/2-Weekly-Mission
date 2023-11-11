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

const emailPattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

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

//4. 공통: 비밀번호 input에서 focus out 할 때
//값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, input에 빨강색 테두리와 아래에 “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 빨강색 에러 메세지가 보입니다.

const passwordInput = document.getElementById("password");
const passwordErrorMessage = passwordInput.nextElementSibling;

const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

function invalidPassword(event) {
  if (!passwordPattern.test(event.target.value)){
    event.target.classList.add("input-error");
    passwordErrorMessage.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  } else {
    event.target.classList.remove("input-error");
  }
}

function resetPasswordInput(event) {
  passwordErrorMessage.textContent = "";
}

passwordInput.addEventListener("focusout", invalidPassword);
passwordInput.addEventListener("focusin", resetPasswordInput);

//5. 7. 로그인 페이지
//이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도경우, “/folder” 페이지로 이동합니다.
//이외의 로그인 시도의 경우 이메일, 비밀번호 input에 빨강색 테두리와 각각의 input아래에 “이메일을 확인해주세요.”, “비밀번호를 확인해주세요.” 빨강색 에러 메세지가 보입니다.

const loginButton = document.querySelector(".login-button");

function testLogin(event) {
  if (emailInput.value === "test@codeit.com" && passwordInput.value === "codeit101") {
    loginButton.href = "/folder";
  } else {
    emailInput.classList.add("input-error");
    emailErrorMessage.textContent = "이메일을 확인해주세요.";
    passwordInput.classList.add("input-error");
    passwordErrorMessage.textContent = "비밀번호를 확인해주세요.";
  }
}

loginButton.addEventListener("click", testLogin)

//6. 공통: 비밀번호 input에서 focus out 할 때
//값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지가 보입니다.

function blankPassword(event) {
  if (event.target.value === ""){
    event.target.classList.add("input-error");
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
  }
}

passwordInput.addEventListener("focusout", blankPassword);