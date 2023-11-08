const submitBtn = document.querySelector(".btn-long-40");
const emailInput = document.querySelector("#input-id");
const passwordInput = document.querySelector("#input-pwd");

submitBtn.addEventListener("click", function (e) {
  if (
    emailInput.value !== "test@codeit.com" ||
    passwordInput.value !== "codeit101"
  ) {
    e.preventDefault();
  }
});
