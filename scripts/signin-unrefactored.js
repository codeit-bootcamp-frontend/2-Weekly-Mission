//모듈화 전 스크립트입니다.
const CLASSNAME_ERROR = "error";
const CLASSNAME_ERROR_MSG = "error-msg";

const emailInputNode = document.querySelector(".signForm_input.email")
const passwordInputNode = document.querySelectorAll(".signForm_input.password")[0]
const signForm = document.querySelector(".signForm")
const togglePasswordBtn = document.querySelectorAll(".password_visible")


function togglePasswordHidden(e){
    const passwordInput = e.target.parentElement.firstElementChild
    e.preventDefault()
    passwordInput.type = passwordInput.type === "text" ? "password" : "text" 

}

function handleSubmitSignIn(e){
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    if (email === "test@codeit.com" && password ==="codeit101"){
        window.location.assign("./folder.html")
    }
    else {
        removeErrorClass(emailInputNode)
        removeErrorClass(passwordInputNode)
        addErrorClass(emailInputNode, "이메일을 확인해주세요")
        addErrorClass(passwordInputNode, "비밀번호를 확인해주세요")
    }
}


function addErrorClass(target, msg=""){
    target.classList.add(CLASSNAME_ERROR)
    if (msg){
        const errorMSG = document.createElement("p")
        errorMSG.classList.add(CLASSNAME_ERROR_MSG)
        errorMSG.textContent = msg
        target.parentElement.append(errorMSG)
    }
}

function removeErrorClass(target){
    target.classList.remove(CLASSNAME_ERROR);
    const errorMSG = target.parentElement.querySelector(`.${CLASSNAME_ERROR_MSG}`);
    if (errorMSG) {
        errorMSG.remove()
    }
}

function focusoutEmailInput(e){
    const emailInput = e.target
    const email = e.target.value;
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
    removeErrorClass(emailInput)
};

function focusoutPasswordInput(e){
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



emailInputNode.addEventListener("focusout", focusoutEmailInput)
passwordInputNode.addEventListener("focusout", focusoutPasswordInput)
signForm.addEventListener("submit", handleSubmitSignIn)
togglePasswordBtn.forEach(btn => {
    btn.addEventListener("click", togglePasswordHidden)
});