import React from "react";
import { HeaderBox, LogoImage, LinkBox } from "../Auth";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderBox>
      <Link href={"/"}>
        <LogoImage
          src={"/images/logo.png"}
          width={210}
          height={38}
          alt="로고 이미지"
        />
      </Link>
      <LinkBox>
        <div>
          이미 회원이신가요?
          <Link href={"/signin"}>로그인 하기</Link>
        </div>
      </LinkBox>
    </HeaderBox>
  );
};

export default Header;
