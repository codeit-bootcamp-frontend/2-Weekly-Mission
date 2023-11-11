const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');
const inputEmail = document.querySelector('#login-email__input');
const inputPassword = document.querySelector('#login-password__input');
const loginButton = document.querySelector('#login-page-button')

let isLogin ={
    email: false,
    password: false
}
let isAlert = {
    email: false,
    password: false
}
function removeElement(container, alertInput, addClassText){
    let div = document.querySelector(addClassText);
    container.removeChild(div);
    alertInput.classList.remove('alert-line'); 
    isAlert.email =true
    isAlert.password =true
}

function updateAlert(tag, text, container){
    tag.innerHTML = text;
    container.classList.add('alert-line');
}

function emailFocus(){
    let div = document.createElement('div');
    if(inputEmail.value === ""){
        updateAlert(div,"이메일을 입력해주세요.",inputEmail)
        isLogin.email=false
        email.appendChild(div);  
    }else{
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputEmail.value)) {
            updateAlert(div, "올바른 이메일 주소가 아닙니다.", inputEmail)
            isLogin.email=false
            email.appendChild(div);  
        }else{
            isLogin.email=true
            isAlert.email =true
        }
      }
      div.classList.add('email-alert-text');
}

function passwordFocus(){
    let div = document.createElement('div');
    let emailRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(inputPassword.value === ""){ 
        updateAlert(div, "비밀번호를 입력해주세요.", inputPassword)
        isLogin.password = false
        password.appendChild(div);
    }else{
        if((!emailRegex.test(inputPassword.value))){
            updateAlert(div, "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.", inputPassword)
            isLogin.password = false
            password.appendChild(div);
        }else{
            isLogin.password = true
            isAlert.password =true
        }
    }
    div.classList.add('password-alert-text');
}

function  emailFocusHandle(e){
    if(e.type == 'focus'){
        removeElement( email, inputEmail, '.email-alert-text')
    }else if(e.type =='blur'){
        emailFocus() 
    }
}

function passwordFocusHandle(e){
    if(e.type=='focus'){
        removeElement(password, inputPassword, '.password-alert-text')
    }else if(e.type =='blur'){
        passwordFocus()
    }
}


function login(e){
    e.preventDefault()
    if(isLogin.email && isLogin.password){
        window.location.href="../folder.html"
        isAlert.email=false
        isAlert.password=false
    }else{
      if(!isLogin.email && !isAlert.email){
        emailFocus()
        isAlert.email=true
      }
      if(!isLogin.password  && !isAlert.password){
        passwordFocus()
        isAlert.password=true
        isAlert.email=true
      }
    }
}





inputEmail.addEventListener('blur', emailFocusHandle);
inputEmail.addEventListener('focus',emailFocusHandle);
inputPassword.addEventListener('blur', passwordFocusHandle);
inputPassword.addEventListener('focus', passwordFocusHandle);
loginButton.addEventListener('click', login)

