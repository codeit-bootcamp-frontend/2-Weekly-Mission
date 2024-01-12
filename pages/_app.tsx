import type { AppProps } from "next/app";
import Header from "../components/Navbar";
import GlobalStyle from "@/styles/reset";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
