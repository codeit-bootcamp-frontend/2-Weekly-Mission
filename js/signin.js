const submitBtn = document.querySelector(".btn-long-40");
const emailInput = document.querySelector("#input-id");
const passwordInput = document.querySelector("#input-pwd");
const inputForm = document.querySelector(".input-container");

const regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

inputForm.addEventListener("focusout", function (e) {
  if (e.target.id === "input-id") {
    if (e.target.value === "") {
      createWarningText(emailInput, "이메일을 입력해주세요.");
    } else if (!regEmail.test(e.target.value)) {
      createWarningText(emailInput, "올바른 이메일 주소가 아닙니다.");
    }
  } else if (e.target.id === "input-pwd") {
    if (e.target.value === "") {
      createWarningText(passwordInput, "비밀번호를 입력해주세요.");
    }
  }
});

inputForm.addEventListener("focusin", function (e) {
  if (e.target.id === "input-id") {
    deleteWarningText(emailInput);
  } else if (e.target.id === "input-pwd") {
    deleteWarningText(passwordInput);
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
  if (element.parentElement.lastElementChild.className !== "alert-danger") {
    const warningText = document.createElement("div");
    warningText.textContent = message;
    warningText.classList.add("alert-danger");
    element.parentElement.appendChild(warningText);
  } else {
    element.parentElement.lastElementChild.textContent = message;
  }
}

function deleteWarningText(element) {
  const deleteTarget = element.parentElement.lastElementChild;
  if (deleteTarget.className === "alert-danger") {
    deleteTarget.remove();
  }
}
