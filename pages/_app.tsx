import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "@/contexts/ModalContext";
import GlobalLayout from "@/layouts/global";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalLayout>
          <GlobalStyles />
          <Component {...pageProps} />
        </GlobalLayout>
      </ModalProvider>
      <div id="modal" />
    </ThemeProvider>
  );
}
