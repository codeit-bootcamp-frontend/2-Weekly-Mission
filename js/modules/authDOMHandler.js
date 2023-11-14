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
  if (element.parentElement.lastElementChild.className === "alert-danger") {
    element.parentElement.lastElementChild.textContent = message;
  } else {
    const warningText = document.createElement("div");
    warningText.textContent = message;
    warningText.classList.add("alert-danger");
    element.parentElement.appendChild(warningText);
  }
  toggleWarningborder(element);
};

const specifyWarningPosition = (element, text) => {
  toggleWarningborder(element);
  createWarningText(element, text);
};

export { deleteWarningText, toggleWarningborder, createWarningText, specifyWarningPosition };
