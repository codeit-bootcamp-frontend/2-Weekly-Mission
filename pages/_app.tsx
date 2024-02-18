import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "@/contexts/ModalContext";
import GlobalLayout from "@/layouts/global";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalLayout>
            <GlobalStyles />
            <Component {...pageProps} />
          </GlobalLayout>
        </ModalProvider>
      </ThemeProvider>
      <div id="modal" />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
