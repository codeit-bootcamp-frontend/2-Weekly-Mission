import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/Layout";
import { ModalProvider } from "@/contexts/ModalContext";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
      <div id="modal" />
    </ThemeProvider>
  );
}
