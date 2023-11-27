import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./commons/nav/Nav";
import Container from "./components/container/container";
import UserInfo from "./components/userInfo/userInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Nav />
    <UserInfo />
    <Container />
  </>
);
