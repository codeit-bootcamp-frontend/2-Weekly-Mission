import type { AppProps } from "next/app";
import Header from "../components/Navbar";
import GlobalStyle from "@/styles/reset";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
