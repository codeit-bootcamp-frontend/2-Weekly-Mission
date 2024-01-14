import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { CommonHeaderBox, LogoImage, LinkBox } from "../Auth";

const Header = () => {
  return (
    <HeaderBox>
      <Link href={"/"}>
        <Logo
          src={"/images/logo.png"}
          width={210}
          height={38}
          alt="로고 이미지"
        />
      </Link>
      <SignUpLinkBox>
        <div>
          회원이 아니신가요?
          <Link href={"/signup"}>회원 가입하기</Link>
        </div>
      </SignUpLinkBox>
    </HeaderBox>
  );
};

const HeaderBox = styled(CommonHeaderBox)``;
const Logo = styled(LogoImage)``;
const SignUpLinkBox = styled(LinkBox)``;

export default Header;
