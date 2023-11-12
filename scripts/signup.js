import validator from "./modules/validateSignForm.js"
import togglePasswordHidden from "./modules/toggleBtn.js";

const emailInputNode = document.querySelector(".signForm_input.email")
const passwordInputNode = document.querySelectorAll(".signForm_input.password")[0]
const passwordCheckInputNode = document.querySelectorAll(".signForm_input.password")[1]
const signForm = document.querySelector(".signForm")
const togglePasswordBtn = document.querySelectorAll(".password_visible")

function handleSubmitSignUp(e){
    e.preventDefault()
    if (!(signForm.querySelector(".error"))){
        location.assign("./folder.html")
    }
}

emailInputNode.addEventListener("focusout", validator.validateEmail)
passwordInputNode.addEventListener("focusout", validator.validatePassword)
passwordCheckInputNode.addEventListener("input", validator.validatePasswordCheck);
togglePasswordBtn.forEach(btn => {btn.addEventListener("click", togglePasswordHidden)});
signForm.addEventListener("submit", handleSubmitSignUp)