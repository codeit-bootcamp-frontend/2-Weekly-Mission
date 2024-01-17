import React from "react";
import Link from "next/link";
import { HeaderBox, LogoImage, LinkBox } from "../Auth";

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
          회원이 아니신가요?
          <Link href={"/signup"}>회원 가입하기</Link>
        </div>
      </LinkBox>
    </HeaderBox>
  );
};

export default Header;
