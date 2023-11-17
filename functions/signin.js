import { message, emailRegex, passwordRegex, updateAlert, removeAlert } from "./utils.js";
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const inputEmail = document.querySelector("#email__input");
const inputPassword = document.querySelector("#password__input");
const loginButton = document.querySelector("#login-page-button");
const passwordIcon = document.querySelector(".password-icon");

let isLogin = {
  email: false,
  password: false,
  passwordCheck: false,
};


function validateEmail(inputValue) {
  if (inputValue == "") {
    isLogin.email = false;
    return message.email.null;
  } else if (!emailRegex.test(inputValue)) {
    isLogin.email = false;
    return message.email.invalid;
  } else if (inputValue === "test@codeit.com") {
    return message.email.duplicate;
  } else {
    isLogin.email = true;
    return "";
  }
}

function validatePassword(inputValue) {
  if (inputValue == "") {
    isLogin.password = false;
    return message.password.null;
  } else if (!passwordRegex.test(inputValue)) {
    isLogin.password = false;
    return message.password.invalid;
  } else {
    isLogin.password = true;
    return "";
  }
}

function emailFocus() {
  const errorMessage = validateEmail(inputEmail.value);
  let alert = document.querySelector(".email-alert-text");
  if (alert) {
    alert.remove();
  }
  if (errorMessage === "") {
    removeAlert(alert, inputEmail);
  } else {
    updateAlert(inputEmail, email, "email-alert-text", errorMessage);
  }
}

function passwordFocus() {
  const errorMessage = validatePassword(inputPassword.value);
  let alert = document.querySelector(".password-alert-text");
  if (alert) {
    alert.remove();
  }
  if (errorMessage === "") {
    removeAlert(alert, inputPassword);
  } else {
    updateAlert(inputPassword, password, "password-alert-text", errorMessage);
  }
}

function login(e) {
  e.preventDefault();
  if (isLogin.email && isLogin.password && isLogin.passwordCheck) {
    window.location.href = "../folder.html";
  }
  if (!isLogin.email) {
    emailFocus(inputEmail.value);
  }
  if (!isLogin.password) {
    passwordFocus(inputPassword.value);
  }
}

function passwordActivation(e) {
  let input = e.target.parentElement.querySelector("input");
  if (input.type === "password") {
    e.target.setAttribute("src", "../images/eye-on.png");
    input.type = "text";
  } else if (input.type === "text") {
    e.target.setAttribute("src", "../images/password-icon.png");
    input.type = "password";
  }
}

inputEmail.addEventListener("focusout", emailFocus);
inputPassword.addEventListener("focusout", passwordFocus);
loginButton.addEventListener("click", login);
passwordIcon.addEventListener("click", passwordActivation);
