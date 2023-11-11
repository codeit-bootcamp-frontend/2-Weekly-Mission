

const email = document.querySelector('#join-email');
const password = document.querySelector('#join-password');
const inputEmail = document.querySelector('#join-email__input');
const inputPassword = document.querySelector('#join-password__input');
const inputPasswordCheck = document.querySelector('.password-check__input');
const passwordCheck = document.querySelector('#password-check');
const joinButton = document.querySelector('#join-page-button') 

let isJoin ={
    email: false,
    password: false,
    passwordCheck:false
}
let isAlert = {
    email: false,
    password: false
}


function updateAlert(tag, text, container){
    tag.innerHTML = text;
    container.classList.add('alert-line');
}

function emailFocus(){
    let div = document.createElement('div');
    if(inputEmail.value === ""){
        updateAlert(div,"이메일을 입력해주세요.",inputEmail)
        email.appendChild(div);  
        isJoin.email=false
    }else{
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputEmail.value)) {
            updateAlert(div, "올바른 이메일 주소가 아닙니다.", inputEmail)
            isJoin.email=false
        }else if(inputEmail.value ==='test@codeit.com'){
            updateAlert(div,"이미 사용 중인 이메일입니다.",inputEmail)
            isJoin.email=false
            email.appendChild(div);  
        }else{
            isJoin.email=true
        }
      }
      div.classList.add('email-alert-text');
}

function passwordFocus(){
    let div = document.createElement('div');
    let emailRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(inputPassword.value === ""){ 
        updateAlert(div, "비밀번호를 입력해주세요.", inputPassword)
        div.classList.add('password-alert-text');
        password.appendChild(div);
        isJoin.password = false
    }else{
        if((!emailRegex.test(inputPassword.value))){
            updateAlert(div, "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.", inputPassword)
            div.classList.add('password-alert-text');
            password.appendChild(div);
            isJoin.password = false
        }else{
            isJoin.password = true
            isAlert.password =true
        }
    }

}


function  emailFocusHandle(e){
    if(e.type == 'focus'){
        removeElement( email, inputEmail, '.email-alert-text')
    }else if(e.type =='blur'){
        emailFocus(); 
    }
}

function passwordFocusHandle(e){
    if(e.type=='focus'){
        removeElement(password, inputPassword, '.password-alert-text')
    }else if(e.type =='blur'){
        passwordFocus();
    }
}

function passwordCheckHandle(e){
    if(e.type == 'blur'){
        let div = document.createElement('div')
        if(inputPassword.value !== inputPasswordCheck.value){
            updateAlert(div, "비밀번호가 일치하지 않아요.",inputPasswordCheck )
            div.classList.add('check-alert-text');
            passwordCheck.appendChild(div);
            isJoin.passwordCheck =false
        }else{
            isJoin.passwordCheck =true
        }
    }else if(e.type == ''){
        removeElement(passwordCheck, inputPasswordCheck, '.password-alert-text')
    }
}


function removeElement(container, alertInput, addClassText){
    let div = document.querySelector(addClassText);
    container.removeChild(div);
    alertInput.classList.remove('alert-line'); 
    isAlert.email =true
    isAlert.password =true
}


function join(e){
    e.preventDefault();
    if(isJoin.email && isJoin.password && isJoin.passwordCheck){
        window.location.href="../folder.html"
        isAlert.email=false
        isAlert.password=false
        console.log('체크')
    }else{
      if(!isJoin.email && !isAlert.email){
        emailFocus()
        isAlert.email=true
      }
      if(!isJoin.password  && !isAlert.password){
        passwordFocus()
        isAlert.password=true
        isAlert.email=true
      }
    }
}





inputEmail.addEventListener('blur',  emailFocusHandle)
inputEmail.addEventListener('focus',  emailFocusHandle)
inputPassword.addEventListener('blur', passwordFocusHandle)
inputPassword.addEventListener('focus',  passwordFocusHandle)
inputPasswordCheck.addEventListener('blur', passwordCheckHandle)
inputPasswordCheck.addEventListener('focus', passwordCheckHandle)
joinButton.addEventListener('click', join )
