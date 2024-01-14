import React from "react";
import styled from "styled-components";
import { CommonHeaderBox, LogoImage, LinkBox } from "../Auth";
import Link from "next/link";

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
      <SignInLinkBox>
        <div>
          이미 회원이신가요?
          <Link href={"/signin"}>로그인 하기</Link>
        </div>
      </SignInLinkBox>
    </HeaderBox>
  );
};

const HeaderBox = styled(CommonHeaderBox)``;
const Logo = styled(LogoImage)``;
const SignInLinkBox = styled(LinkBox)``;

export default Header;
