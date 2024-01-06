import React from "react";
import styled from "styled-components";
import AuthInput from "../AuthInput";
import AuthFooter from "../Footer";
import { CtaShort } from "@/components/Common/Cta/styled";

function AuthSection() {
  return (
    <SignBox>
      <form id="form" className="sign-form">
        <div className="sign-inputs">
          <AuthInput label="이메일" type="email" />
          <AuthInput label="패스워드" type="password" />
        </div>
        <CtaShort>로그인</CtaShort>
      </form>
      <AuthFooter />
    </SignBox>
  );
}

export default AuthSection;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;

const SignBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3.2rem;
  width: 100%;
  max-width: 40rem;

  @media (min-width: 768px) {
    width: 40rem;
  }
`;
