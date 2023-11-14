import {message} from "./signin.js"
import{emailRegex,passwordRegex,updateAlert,removeAlert,} from "./utils.js"
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');
const inputEmail = document.querySelector('#email__input');
const inputPassword = document.querySelector('#password__input');
const inputPasswordCheck = document.querySelector('#password-check__input');
const joinButton = document.querySelector('#join-page-button');
const passwordIcons = document.querySelectorAll('.password-icon');



function validation(choice){
    let result = "" 
    if(choice == email){
        if(inputEmail.value === ""){
            result=  message.email.null
        }else if(!emailRegex.test(inputEmail.value)){
            result = message.email.invalid
        }else if(inputEmail.value === "test@codeit.com"){
            result = message.email.duplicate
        }else{
            result = ""
        }
    }else if(choice == password){
        if(inputPassword.value === ""){
            result=  message.password.null
        }else if(!passwordRegex.test(inputPassword.value)){
            result = message.password.invalid
        }else{
            result = ""
        }
    }else if(choice == passwordCheck){
        if(inputPasswordCheck.value==""){
            result = message.password.check
        }else if(inputPassword.value !== inputPasswordCheck.value){
            result = message.password.match
        }else{
            result = ""
        }
    }
    return result
}


function emailFocus(){
    let alert = document.querySelector('.email-alert-text')
    if(alert){
        alert.remove();
    }
    if(validation(email) === ""){
        removeAlert(alert,inputEmail)
    }else{
        updateAlert(inputEmail, email,"email-alert-text", validation(email));
    }       
}

function passwordFocus(){
    let alert = document.querySelector('.password-alert-text')
    if(alert){
        alert.remove();
    }
    if(validation(password) === ""){
        removeAlert(alert,inputPassword)
    }else{
        updateAlert(inputPassword, password,"password-alert-text", validation(password));
    }       
}

function passwordCheckFocus(){
    let alert = document.querySelector('.check-alert-text')
    if(alert){
        alert.remove();
    }
    if(validation(passwordCheck) === ""){
        removeAlert(alert,inputPasswordCheck)
    }else{
        updateAlert(inputPasswordCheck, passwordCheck,"check-alert-text", validation(passwordCheck));
    }   
}


function join(e) {
    e.preventDefault();
    if (validation(email)=="" && validation(password)=="" && validation(passwordCheck) =="") {
        window.location.href = "../folder.html";
    }else{
        if(validation(email) !==""){
           emailFocus();
        }
        if(validation(password) !==""){
            passwordFocus();
         }
         if(validation(passwordCheck) !==""){
            passwordCheckFocus();
         }
    }
}


let passwordToggle =false;
function passwordActivation(e) {
    passwordToggle = !passwordToggle
    if (!passwordToggle) {
        e.target.setAttribute('src', '../images/password-icon.png');
        inputPassword.type = 'password';
    } else {
        e.target.setAttribute('src', '../images/eye-on.png');
        inputPassword.type = 'text';
    }
}

inputEmail.addEventListener('focusout', emailFocus);
inputPassword.addEventListener('focusout', passwordFocus);
inputPasswordCheck.addEventListener('focusout', passwordCheckFocus);
passwordIcons.forEach((icon)=>{
    icon.addEventListener('click' ,passwordActivation)
})
joinButton.addEventListener('click', join );
