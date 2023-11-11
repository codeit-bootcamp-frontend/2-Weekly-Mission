"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // =================================================================
  const emailInput = document.querySelector("#email");
  const pwInput = document.querySelector("#password");
  const emailErrorMsg = document.querySelector("#email_error");

  emailInput.addEventListener("blur", () => {
    if (emailInput.value === "") {
      emailErrorMsg.classList.remove("done");
      emailErrorMsg.classList.add("show");
      emailErrorMsg.innerHTML = "이메일 주소를 입력하세요.";
      emailInput.classList.add("errorInput_style");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailErrorMsg.innerHTML = "올바른 이메일 주소가 아닙니다.";
    } else if (emailInput.value === "test@codeit.com") {
      emailErrorMsg.innerHTML = "이미 사용 중인 이메일입니다.";
    } else {
      emailErrorMsg.classList.remove("show");
      emailErrorMsg.classList.add("done");
      emailInput.classList.remove("errorInput_style");
    }
  });

  // =================================================================
});
