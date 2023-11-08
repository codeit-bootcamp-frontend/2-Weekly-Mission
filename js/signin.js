const submitBtn = document.querySelector(".btn-long-40");
const emailInput = document.querySelector("#input-id");
const passwordInput = document.querySelector("#input-pwd");

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
