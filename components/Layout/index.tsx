import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

function Layout({ children }: { children: ReactNode }) {
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

export default Layout;
