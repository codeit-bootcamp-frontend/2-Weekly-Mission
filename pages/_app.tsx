import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "@/contexts/ModalContext";
import GlobalLayout from "@/layouts/global";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const getAccessToken = localStorage.getItem("accessToken");
    const protectedPaths = ["/shared", "/folder"];
    const isProtectedPath = protectedPaths.some((path) => router.pathname.startsWith(path));
    const isAuthPath = router.pathname.startsWith("/auth");

    if (isProtectedPath && !getAccessToken) {
      router.push("/");
    } else if (isAuthPath && getAccessToken) {
      router.push("/folder");
    }
  }, [router]);

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
