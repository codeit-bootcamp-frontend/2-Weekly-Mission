import React from "react";
import styled from "styled-components";
import Image from "next/image";
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
  margin-bottom: 3rem;
`;
const LogoImage = styled(Image)`
  width: 21.058rem;
  margin-bottom: 1.6rem;
`;
const SignUpBox = styled.div`
  font-size: 1.6rem;
  & div {
    font-weight: 400;
    line-height: 2.4rem;
  }

  & a {
    margin-left: 0.8rem;
    font-size: 1.6rem;
    line-height: 1.909rem;
    font-weight: 600;
    color: var(--primary-color);
    text-decoration: underline;
  }
`;

export default Header;
