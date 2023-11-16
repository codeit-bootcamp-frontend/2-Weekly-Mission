import { message, emailRegex, passwordRegex, updateAlert, removeAlert } from "./utils.js";
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const inputEmail = document.querySelector("#email__input");
const inputPassword = document.querySelector("#password__input");
const inputPasswordCheck = document.querySelector("#password-check__input");
const joinButton = document.querySelector("#join-page-button");
const passwordIcons = document.querySelectorAll(".password-icon");

function validateEmail(selectInput) {
  let inputValue = selectInput;
  if (inputValue == "") {
    return message.email.null;
  }else if(!emailRegex.test(inputValue)){
    return message.email.invalid;
  }else if(emailValue === "test@codeit.com"){
    return message.email.duplicate;
  }else{
    return ""
  }
}

function validatePassword(selectInput){
  let inputValue = selectInput
  if (inputValue == "") {
    return message.password.null;
  }else if(!passwordRegex.test(inputValue)){
    return message.password.invalid;
  }else{
    return ""
  }
}

function validatePasswordCheck(selectInput){
  let inputValue = selectInput
  if (inputValue == "") {
    return message.password.check;
  }else if(inputPassword.value != inputValue){
    return message.password.match;
  }
    return ""
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
  if (validateEmail == "" && validatePassword == "" && validatePasswordCheck == "") {
    window.location.href = "../folder.html";
  } else {
    if (inputEmail !== "") {
      emailFocus();
    }
    if (inputPassword !== "") {
      passwordFocus();
    }
    if (inputPasswordCheck !== ""){
      passwordCheckFocus();
    }
  }
}

let passwordToggle =false
function passwordActivation(e) {
  let input = e.target.parentElement
  passwordToggle = !passwordToggle
  console.log(input)
  if (!passwordToggle) {
    e.target.setAttribute("src", "../images/password-icon.png");
    input.type = "password";
  } else {
    e.target.setAttribute("src", "../images/eye-on.png");
    input.type = "text";
  }
}

inputEmail.addEventListener("focusout", emailFocus);
inputPassword.addEventListener("focusout", passwordFocus);
inputPasswordCheck.addEventListener("focusout", passwordCheckFocus);
passwordIcons.forEach((icon) => {
  icon.addEventListener("click", passwordActivation);
});
joinButton.addEventListener("click", join);
