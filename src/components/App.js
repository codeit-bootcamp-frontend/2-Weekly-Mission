import { useEffect, useState } from "react";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { getUserInfo } from "../function/getUserInfo.js";

export function App() {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);

  return (
    <>
      <Header userInfo={userInfo} />
      <Footer />
    </>
  );
}
