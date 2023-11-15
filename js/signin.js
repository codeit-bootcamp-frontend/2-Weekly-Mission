import { $submitBtn, $emailInput, $passwordInput } from "./modules/domElements.js";
import { initializeSignForm as initializeSignInForm } from "./modules/authEventHandler.js";
import { postSignIn, redirectIfAccessTokenExists } from "./modules/authApiUtils.js";

redirectIfAccessTokenExists("./folder.html");

initializeSignInForm();

const submitSignInHandler = $submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // user 객체 생성
  const user = {
    email: $emailInput.value,
    password: $passwordInput.value,
  };

  // login 시도
  postSignIn(user);
});
