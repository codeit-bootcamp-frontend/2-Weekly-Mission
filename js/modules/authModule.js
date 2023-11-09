import { inputForm } from "./domSelectors.js";

const authEvent = () => {
  const formFocusInHandler = inputForm.addEventListener("focusin", (e) => {
    toggleWarningborder(e.target);
    deleteWarningText(e.target);
  });

  const eyeIconClickHandler = inputForm.addEventListener("click", ({ target }) => {
    if (target.classList.contains("toggle-show-pwd")) {
      if (target.dataset.show === "true") {
        target.src = "../images/eye-off.svg";
        target.previousElementSibling.type = "password";
        target.dataset.show = "false";
      } else {
        target.src = "../images/eye-on.svg";
        target.previousElementSibling.type = "text";
        target.dataset.show = "true";
      }
    }
  });
};

const deleteWarningText = (element) => {
  const deleteTarget = element.parentElement.lastElementChild;
  if (deleteTarget.className === "alert-danger") {
    deleteTarget.remove();
  }
};

const toggleWarningborder = (element) => {
  if (element.parentElement.lastElementChild.className === "alert-danger") {
    element.classList.toggle("warning-alert-border");
  }
};

const createWarningText = (element, message) => {
  if (element.parentElement.lastElementChild.className !== "alert-danger") {
    const warningText = document.createElement("div");
    warningText.textContent = message;
    warningText.classList.add("alert-danger");
    element.parentElement.appendChild(warningText);
  } else {
    element.parentElement.lastElementChild.textContent = message;
  }
  toggleWarningborder(element);
};

export { authEvent, toggleWarningborder, createWarningText };
