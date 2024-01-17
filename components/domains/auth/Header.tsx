import React, { ReactNode } from "react";
import { HeaderBox } from "./Auth";
import { LogoImage, LinkBox } from "./Auth";
import Link from "next/link";
const Header = ({ children }: { children: ReactNode }) => {
  return (
    <HeaderBox>
      <Link href={"/"}>
        <LogoImage
          src={"/images/logo.png"}
          width={210}
          height={38}
          alt="로고 이미지"
        />
        <LinkBox>{children}</LinkBox>
      </Link>
    </HeaderBox>
  );
};

export default Header;
