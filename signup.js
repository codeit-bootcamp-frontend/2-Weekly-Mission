// v이메일 input에서 focus out 할 때, 값이 없을 경우 input에 빨강색 테두리와 아래에 “이메일을 입력해주세요.” 빨강색 에러 메세지가 보입니다
// v이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 input에 빨강색 테두리와 아래에 “올바른 이메일 주소가 아닙니다.” 빨강색 에러 메세지가 보입니다
// v이메일 input에서 focus out 일 때, input 값이 test@codeit.com 일 경우 input에 빨강색 테두리와 아래에 “이미 사용 중인 이메일입니다.” 빨강색 에러 메세지가 보입니다.
// v비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, input에 빨강색 테두리와 아래에 “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 빨강색 에러 메세지가 보입니다.
// v비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input에 빨강색 테두리와 아래에 “비밀번호가 일치하지 않아요.” 빨강색 에러 메세지가 보입니다.
// 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 빨강색 테두리와 에러 메세지가 보입니다.
// 이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.
// v이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도경우, “/folder” 페이지로 이동합니다.
// v비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지가 보입니다.
// v이외의 로그인 시도의 경우 이메일, 비밀번호 input에 빨강색 테두리와 각각의 input아래에 “이메일을 확인해주세요.”, “비밀번호를 확인해주세요.” 빨강색 에러 메세지가 보입니다.
// 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 됩니다.
// v이메일, 비밀번호 input에 에러 관련 디자인을 Components 영역의 에러 케이스로 적용합니다.
const CLASSNAME_ERROR = "error";
const CLASSNAME_ERROR_MSG = "error-msg";
const CLASSNAME_BLIND = "blind";

const emailInputNode = document.querySelector(".signForm_input.email")
const passwordInputNode = document.querySelectorAll(".signForm_input.password")[0]
const passwordCheckInputNode = document.querySelectorAll(".signForm_input.password")[1]

const signForm = document.querySelector(".signForm")
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

function validPasswordCheck(e){
    const password = passwordInputNode.value
    const passwordCheckInput = e.target
    const passwordCheck = e.target.value
    removeErrorClass(passwordCheckInput)
    if (!(passwordCheck === password)){
        addErrorClass(passwordCheckInput, "비밀번호가 일치하지 않아요")
        return
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


function focusoutEmailInput(e){
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

emailInputNode.addEventListener("focusout", focusoutEmailInput)
passwordInputNode.addEventListener("focusout", focusoutPasswordInput)
passwordCheckInputNode.addEventListener("input", validPasswordCheck);