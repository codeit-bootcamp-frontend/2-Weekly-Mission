const submitBtn = document.querySelector(".btn-long-40");
const emailInput = document.querySelector("#input-id");
const passwordInput = document.querySelector("#input-pwd");
const inputForm = document.querySelector(".input-container");

inputForm.addEventListener("focusout", function (e) {
  if (e.target.id === "input-id") {
    console.log("이메일 창에서 focusout 함");
  } else if (e.target.id === "input-pwd") {
    console.log("비밀번호 창에서 focusout 함");
  }
});

inputForm.addEventListener("focusin", function (e) {
  if (e.target.id === "input-id") {
    console.log("이메일 창에 focusin 함");
  } else if (e.target.id === "input-pwd") {
    console.log("비밀번호 창에 focusin 함");
  }
});

submitBtn.addEventListener("click", function (e) {
  if (
    emailInput.value !== "test@codeit.com" ||
    passwordInput.value !== "codeit101"
  ) {
    e.preventDefault();
    handleInvalidLogin();
  }
});

function handleInvalidLogin() {
  createWarningText(emailInput, "이메일을 확인해주세요.");
  createWarningText(passwordInput, "비밀번호를 확인해주세요.");
}

function createWarningText(element, message) {
  const warningText = document.createElement("div");
  warningText.textContent = message;
  warningText.classList.add("alert-danger");
  if (element.parentElement.lastElementChild.className !== "alert-danger") {
    element.parentElement.appendChild(warningText);
  }
}
