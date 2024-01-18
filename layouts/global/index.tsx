import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

function GlobalLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const isAuthRoute = !router.pathname.startsWith("/auth");

  return (
    <>
      {isAuthRoute && <Header />}
      {children}
      {isAuthRoute && <Footer />}
    </>
  );
}

export default GlobalLayout;
