window.onload = function(){

    const inputList = document.querySelectorAll('.sign-input');

    const checkEmail = function(e){
        const value = e.target.value;
        value.length === 0 ? noEnterdEmail() : EnterdEmail(value);
    }

    const noEnterdEmail = function(){
        const massage = document.createElement('small');
        const signBox = document.querySelectorAll('.sign-input-box')[0];
        massage.textContent = '이메일을 입력해 주세요.';
        massage.style.color = 'red';
        inputList[0].style.border = '1px solid red';
        signBox.appendChild(massage);
    }

    const EnterdEmail = function(value){
        value.indexOf('@') === -1 || value.indexOf('.') === -1 ? incorrectEmail() : {};
        value === 'test@codeit.com' ? dupEmail() : {};
    }

    const incorrectEmail = function(){
        const massage = document.createElement('small');
        const signBox = document.querySelectorAll('.sign-input-box')[0];
        massage.textContent = '올바른 이메일 주소가 아닙니다.';
        massage.style.color = 'red';
        inputList[0].style.border = '1px solid red';
        signBox.appendChild(massage);
    }

    const dupEmail = function(){
        const massage = document.createElement('small');
        const signBox = document.querySelectorAll('.sign-input-box')[0];
        massage.textContent = '이미 사용 중인 이메일 입니다.';
        massage.style.color = 'red';
        inputList[0].style.border = '1px solid red';
        signBox.appendChild(massage);
        
    }

    const checkPw = function(e){
        const value = e.target.value;
        value.length === 0 ? noEnterdPw() : EnterdPw(value);
    }

    const noEnterdPw = function(){
        const massage = document.createElement('small');
        const signBox = document.querySelectorAll('.sign-input-box')[1];
        massage.textContent = '비밀번호를 입력해 주세요.';
        massage.style.color = 'red';
        inputList[1].style.border = '1px solid red';
        signBox.appendChild(massage);
    }

    const EnterdPw = function(value){
        value.length < 8 ? incorrectPw() : {};
    }

    const incorrectPw = function(){
        const massage = document.createElement('small');
        massage.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.';
        const signBox = document.querySelectorAll('.sign-input-box')[1];
        massage.style.color = 'red';
        inputList[1].style.border = '1px solid red';
        signBox.appendChild(massage);
    }

    inputList[0].addEventListener('focusout', checkEmail);
    inputList[1].addEventListener('focusout', checkPw);
}