import type { AppProps } from "next/app";
import Header from "../components/Navbar";
import GlobalStyle from "@/styles/reset";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const footerRef = useRef<any>(null);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} footerRef={footerRef} />
      <Footer setRef={footerRef} />
    </>
  );
}
