import NavLogo from "./logo.js";
import { Profile } from "./loginedImg.js";
import loginButton from "./loginButton.js";
import "./nav.css";
import { useState } from "react";

// function AccessTokenValid() {
//   const check = window.localStorage.getItem("accessToken");
//   if (check) {
//     return loginButton();
//   } else {
//     return Profile();
//   }
// }

function NavBar() {
  return (
    <nav>
      <NavLogo />
      <Profile />
    </nav>
  );
}

export default NavBar;
