import { useEffect, useState } from "react";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { getUserInfo } from "../Api/Api.js";

export function App() {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);

  return (
    <>
      <Header userInfo={userInfo} />
      <Main />
      <Footer />
    </>
  );
}
