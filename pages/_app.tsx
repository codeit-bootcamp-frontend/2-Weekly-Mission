import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { getUserData } from "./api/SharedApi";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import GlobalStyle from "../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  interface UserInfo {
    id: number;
    name: string;
    email: string;
    profileImageSource: string;
  }

  const [user, setUser] = useState<UserInfo>({
    id: 1,
    name: "",
    email: "",
    profileImageSource: "",
  });

  const handleEmailLoad = async () => {
    const data = await getUserData();
    setUser(data);
  };

  useEffect(() => {
    handleEmailLoad();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header user={user} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
