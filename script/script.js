"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("#email");
  const pwInput = document.querySelector("#password");
  const emailErrorMsg = document.querySelector("#email_error");

  emailInput.addEventListener("blur", () => {
    if (emailInput.value === "") {
      emailErrorMsg.classList.remove("done");
      emailErrorMsg.classList.add("show");
      emailInput.classList.add("errorInput_style");
    }
  });
});
