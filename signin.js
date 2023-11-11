//이메일 input에서 focus out 할 때
//값이 없을 경우 input에 빨강색 테두리와 아래에 “이메일을 입력해주세요.” 빨강색 에러 메세지가 보입니다

const emailInput = document.getElementById("email");
const emailErrorMessage = emailInput.nextElementSibling;

function blankEmail(event) {
  if (event.target.value === ""){
    event.target.classList.add("input-error");
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
  } else {
    event.target.classList.remove("input-error");
  }
}

function resetEmailInput(event) {
  emailErrorMessage.textContent = "";
}

emailInput.addEventListener("focusout", blankEmail);
emailInput.addEventListener("focusin", resetEmailInput);