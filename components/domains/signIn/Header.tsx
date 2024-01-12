import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderBox>
      <Link href={"/"}>
        <LogoImage src={"/images/logo.png"} width={210} height={38} alt="로고 이미지" />
      </Link>
      <SignUpBox>
        <div>
          회원이 아니신가요?
          <Link href={"/signup"}>회원 가입하기</Link>
        </div>
      </SignUpBox>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LogoImage = styled(Image)``;
const SignUpBox = styled.div``;

export default Header;
