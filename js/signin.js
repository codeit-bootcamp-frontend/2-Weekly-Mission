import { submitBtn, emailInput, passwordInput, inputForm } from "./modules/domSelectors.js";
import regEmail from "./modules/regexPatterns.js";

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
  toggleWarningborder(e.target);
  if (e.target.id === "input-id") {
    deleteWarningText(emailInput);
  } else if (e.target.id === "input-pwd") {
    deleteWarningText(passwordInput);
  }
});

submitBtn.addEventListener("click", function (e) {
  if (emailInput.value !== "test@codeit.com" || passwordInput.value !== "codeit101") {
    e.preventDefault();
    handleInvalidLogin();
  }
});

inputForm.addEventListener("click", function (e) {
  if (e.target.classList.contains("toggle-show-pwd")) {
    if (e.target.dataset.show === "true") {
      e.target.src = "../images/eye-off.svg";
      e.target.previousElementSibling.type = "password";
      e.target.dataset.show = "false";
    } else {
      e.target.src = "../images/eye-on.svg";
      e.target.previousElementSibling.type = "text";
      e.target.dataset.show = "true";
    }
  }
});

function handleInvalidLogin() {
  toggleWarningborder(emailInput);
  toggleWarningborder(passwordInput);
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
  toggleWarningborder(element);
}

function deleteWarningText(element) {
  const deleteTarget = element.parentElement.lastElementChild;
  if (deleteTarget.className === "alert-danger") {
    deleteTarget.remove();
  }
}

function toggleWarningborder(element) {
  if (element.parentElement.lastElementChild.className === "alert-danger") {
    element.classList.toggle("warning-alert-border");
  }
}
