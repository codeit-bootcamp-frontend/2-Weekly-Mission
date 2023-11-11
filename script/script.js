"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("#email");
  const pwInput = document.querySelector("#password");
  const emailDiv = document.querySelector(".email_container");
  const pwDiv = document.querySelector(".password_container");
  const emailErrorMsg = document.querySelector("#email_error");

  emailInput.addEventListener("blur", () => {
    if (emailInput.value === "") {
      emailErrorMsg.classList.remove("done");
      emailErrorMsg.classList.add("show");
    }
  });
});
