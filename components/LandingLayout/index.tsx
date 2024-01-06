import React, { ReactNode } from "react";
import LandingHeader from "./LandingHeader";
import { Article } from "./styled";
function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LandingHeader />
      <Article>{children}</Article>
    </>
  );
}

export default LandingLayout;
