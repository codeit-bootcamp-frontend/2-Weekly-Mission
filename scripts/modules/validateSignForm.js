import { addErrorClass,removeErrorClass } from "./handleErrorClass.js";

const passwordInputNode = document.querySelectorAll(".signForm_input.password")[0]

function validateEmail(e){
    const emailInput = e.target
    const email = e.target.value;
    removeErrorClass(emailInput)
    if (email === ""){
        addErrorClass(emailInput, "이메일을 입력해주세요")
        return
    }
    if (!emailInput.validity.valid){
        addErrorClass(emailInput, "올바른 이메일 주소가 아닙니다.")
        return
    }    
    if (email === "test@codeit.com"){
        addErrorClass(emailInput, "이미 사용중인 이메일입니다")
        return
    }
};

function validatePassword(e){
    const passwordInput = e.target
    const password = e.target.value
    removeErrorClass(passwordInput)
    if (password === ""){
        addErrorClass(passwordInput, "비밀번호를 입력해주세요")
        return
    }
    if (!passwordInput.validity.valid){
        addErrorClass(passwordInput, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.")
        return
    }
}

function validatePasswordCheck(e){
    const password = passwordInputNode.value
    const passwordCheckInput = e.target
    const passwordCheck = e.target.value
    removeErrorClass(passwordCheckInput)
    if (!(passwordCheck === password)){
        addErrorClass(passwordCheckInput, "비밀번호가 일치하지 않아요")
        return
    }
}

export default {validateEmail, validatePassword, validatePasswordCheck}