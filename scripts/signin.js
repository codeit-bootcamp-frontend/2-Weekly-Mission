import passAuth from "./modules/redirector.js";
passAuth()
import {renderErrorMSGNode, removeErrorMSGNode} from "./modules/handleErrorClass.js";
import validator from "./modules/validateSignForm.js"
import togglePasswordHidden from "./modules/toggleBtn.js";


const emailInputNode = document.querySelector(".signForm_input.email")
const passwordInputNode = document.querySelectorAll(".signForm_input.password")[0]
const signForm = document.querySelector(".signForm")
const togglePasswordBtn = document.querySelectorAll(".password_visible")

function handleSubmitSignIn(e){
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const payload = {email, password}
    const postSignIn = async (payload) => {
        try {
            const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in",{
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            });
          
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json()
            const {accessToken} = json.data
            localStorage.setItem("accessToken",JSON.stringify(accessToken)); 
            location.assign("./folder.html")
            return json.data
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        };
    };
    if (postSignIn(payload)){
        location.assign("./folder.html")
    }
    else {
        removeErrorMSGNode(emailInputNode)
        removeErrorMSGNode(passwordInputNode)
        renderErrorMSGNode(emailInputNode, "이메일을 확인해주세요")
        renderErrorMSGNode(passwordInputNode, "비밀번호를 확인해주세요")
    }
}


emailInputNode.addEventListener("focusout", validator.validateEmailOnFocusout)
passwordInputNode.addEventListener("focusout", validator.validatePasswordOnFocusout)
togglePasswordBtn.forEach(btn => {btn.addEventListener("click", togglePasswordHidden)});
signForm.addEventListener("submit", handleSubmitSignIn)