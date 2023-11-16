import {eye ,pwd ,mail, submit, pwdWarning,mailWarning,email_format} from "./sign_let.js"
import {setmessage, wrong} from "./sign.js"
function login_wrong_pwd(){
    let mailWarning = mail.nextElementSibling;
    let pwdWarning = eye.nextElementSibling;
    pwd.style.borderColor = "#ff5b56";
    let pwd_nologin = setmessage("비밀번호를 확인해주세요.")
    if(pwdWarning || mailWarning){
        pwd.parentElement.replaceChild(pwd_nologin, pwdWarning);
    }else if(pwdWarning && !mailWarning){
        pwd.parentElement.replaceChild(pwd_nologin, pwdWarning);
    }else if(!pwdWarning && mailWarning){
        pwd.parentElement.append(pwd_nologin);
    }else{
        pwd.parentElement.append(pwd_nologin);
    }
}

function login_wrong_mail(){
    let mailWarning = mail.nextElementSibling;
    let mail_nologin = setmessage("이메일을 확인해주세요.");
    mail.style.borderColor = "#ff5b56";
    if(pwdWarning || mailWarning){
        mail.parentElement.replaceChild(mail_nologin, mailWarning);
    }else if(pwdWarning && !mailWarning){
        mail.parentElement.append(mail_nologin);
    }else if(!pwdWarning && mailWarning){
        mail.parentElement.replaceChild(mail_nologin, mailWarning);
    }else{
        mail.parentElement.append(mail_nologin);
    }
}

function eye_toggle(){
    for(let i = 0; i<eye.children.length; i++){
        eye.children[i].classList.toggle("eye_none");
    }

    if(pwd.type == 'password'){
        pwd.type = 'text';
    }else{
        pwd.type = 'password';
    };
}
function mail_focusout(a){
    let mail_null = setmessage("이메일을 입력해주세요.")
    let mail_wrong = setmessage("올바른 이메일 주소가 아닙니다.");
    let mailWarning = mail.nextElementSibling;
    if(mail.value === ""){
        mail.style.borderColor = "#ff5b56";
        wrong(mail_null,mailWarning,mail);
    }else if(!email_format.test(mail.value)){
        mail.style.borderColor = "#ff5b56";
        wrong(mail_wrong,mailWarning,mail);
    }else{
        mail.style.borderColor = "#ccd5e3";
    }
}
function login_go(e){e.preventDefault()
    const logining = {
        email:"test@codeit.com",
        password : "sprint101",
    }
    fetch("https://bootcamp-api.codeit.kr/api/sign-in",{
        method : 'POST',
        body : JSON.stringify(logining),
    })
        .then((response)=> response.json())
        .then((result)=> {console.log(result)
            if(mail.value === "test@codeit.com" && pwd.value === "codeit101"){
                console.log('login~')
            }else if(mail.value === "test@codeit.com" && pwd.value !== "codeit101"){
                e.preventDefault()
                login_wrong_pwd()
            }else if(mail.value !== "test@codeit.com" && pwd.value !== "codeit101"){
                e.preventDefault()
                login_wrong_pwd()
                login_wrong_mail()
            }
        })
        .catch((error)=>{console.log(error)})
        .finally(()=>{console.log("asdf")})

    
}
function pwd_focusout(){
    let pwdWarning = eye.nextElementSibling;
    let pwd_null = setmessage("비밀번호를 입력해주세요.")
    if(pwd.value === ""){
        pwd.style.borderColor = "#ff5b56";
        wrong(pwd_null,pwdWarning,pwd)
    }else{
        pwd.style.borderColor = "#ccd5e3";
    }
}
function input_ing(e) {
    if (e.target.name === "pwd") {
        let eyeSibling = eye.nextElementSibling;
        if (eyeSibling) {
            eyeSibling.remove();
        }
    } else {
        let targetSibling = e.target.nextElementSibling;
        if (targetSibling) {
            e.target.parentElement.removeChild(targetSibling);
        }
    }
}

export { eye_toggle, mail_focusout, login_go,pwd_focusout,input_ing};