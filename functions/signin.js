import { message, emailRegex, passwordRegex, updateAlert, removeAlert } from "./utils.js";
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const inputEmail = document.querySelector("#email__input");
const inputPassword = document.querySelector("#password__input");
const loginButton = document.querySelector("#login-page-button");
const passwordIcon = document.querySelector(".password-icon");



//객체의 키로 줄여보기
function validation(choice) {
  let result = "";
  if (choice == email) {
    if (inputEmail.value === "") {
      result = message.email.null;
    } else if (!emailRegex.test(inputEmail.value)) {
      result = message.email.invalid;
    } else {
      result = "";
    }
  } else if (choice == password) {
    if (inputPassword.value === "") {
      result = message.password.null;
    } else if (!passwordRegex.test(inputPassword.value)) {
      result = message.password.invalid;
    } else {
      result = "";
    }
  }
  return result;
}

function emailFocus(e) {
  let alert = document.querySelector(".email-alert-text");
  if (alert) {
    alert.remove();
  }
  if (validation(e.c) === "") {
    removeAlert(alert, inputEmail);
  } else {
    updateAlert(inputEmail, email, "email-alert-text", validation(email));
  }
}

function passwordFocus(e) {
  let alert = document.querySelector(".password-alert-text");
  if (alert) {
    alert.remove();
  }
  if (validation(password) === "") {
    removeAlert(alert, inputPassword);
  } else {
    updateAlert(inputPassword, password, "password-alert-text", validation(password));
  }
}

function login(e) {
  e.preventDefault();
  if (validation(email) == "" && validation(password) == "") {
    window.location.href = "../folder.html";
  } else {
    if (validation(email) !== "") {
      emailFocus();
    }
    if (validation(password) !== "") {
      passwordFocus();
    }
  }
}

// 전역변수 고려해서 은닉화 하기
let passwordToggle = false;
function passwordActivation() {
  passwordToggle = !passwordToggle;
  if (!passwordToggle) {
    passwordIcon.setAttribute("src", "../images/password-icon.png");
    inputPassword.type = "password";
  } else {
    passwordIcon.setAttribute("src", "../images/eye-on.png");
    inputPassword.type = "text";
  }
}

inputEmail.addEventListener("focusout", emailFocus);
inputPassword.addEventListener("focusout", passwordFocus);
loginButton.addEventListener("click", login);
passwordIcon.addEventListener("click", passwordActivation);
