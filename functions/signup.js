import { message, emailRegex, passwordRegex, updateAlert, removeAlert } from "./utils.js";
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const inputEmail = document.querySelector("#email__input");
const inputPassword = document.querySelector("#password__input");
const inputPasswordCheck = document.querySelector("#password-check__input");
const joinButton = document.querySelector("#join-page-button");
const passwordIcons = document.querySelectorAll(".password-icon");

let isLogin={
  email:false,
  password:false,
  passwordCheck:false
}



function validateEmail(inputValue) {
  if (inputValue == "") {
    isLogin.email =false
    return message.email.null;
  }else if(!emailRegex.test(inputValue)){
    isLogin.email =false
    return message.email.invalid;
  }else if(inputValue === "test@codeit.com"){
    return message.email.duplicate;
  }else{
    isLogin.email =true
    return ""
  }
}

function validatePassword(inputValue){
  if (inputValue == "") {
    isLogin.password =false
    return message.password.null;
  }else if(!passwordRegex.test(inputValue)){
    isLogin.password =false
    return message.password.invalid;
  }else{
    isLogin.password = true
    return ""
  }
}

function validatePasswordCheck(inputValue){
  if (inputValue == "") {
    isLogin.passwordCheck =false
    return message.password.check;
  }else if(inputPassword.value != inputValue){
    isLogin.passwordCheck =false
    return message.password.match;
  }else{
    isLogin.passwordCheck = true
    return ""
  }
}

function emailFocus(e) {
  const errorMessage = validateEmail(e.target.value);
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

function passwordFocus(e) {
  const errorMessage = validatePassword(e.target.value);
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

function passwordCheckFocus(e) {
  const errorMessage = validatePasswordCheck(e.target.value);
  let alert = document.querySelector(".check-alert-text");
  if (alert) {
    alert.remove();
  }
  if (errorMessage === "") {
    removeAlert(alert, inputPasswordCheck);
  } else {
    updateAlert(inputPasswordCheck, passwordCheck, "check-alert-text", errorMessage);
  }
}

function join(e) {
  e.preventDefault();
  if (isLogin.email && isLogin.password && isLogin.passwordCheck) {
    window.location.href = "../folder.html";
  }
  if (!isLogin.email) {
    emailFocus();
  }
  
  if (!isLogin.password) {
    console.log('Password is false.');
    passwordFocus();
  }
  
  if (!isLogin.passwordCheck) {
    console.log('PasswordCheck is false.');
    passwordCheckFocus();
  }
  
}


function passwordActivation(e) {
  let input = e.target.parentElement.querySelector('input')
  if (input.type === 'password') {
    e.target.setAttribute("src", "../images/eye-on.png");
    input.type = "text";
  } else if((input.type === 'text')) {
    e.target.setAttribute("src", "../images/password-icon.png");
    input.type = "password";
  }
}

inputEmail.addEventListener("focusout", emailFocus);
inputPassword.addEventListener("focusout", passwordFocus);
inputPasswordCheck.addEventListener("focusout", passwordCheckFocus);
passwordIcons.forEach((icon) => {
  icon.addEventListener("click", passwordActivation);
});
joinButton.addEventListener("click", join);
