import React, { ReactNode } from "react";
import styled from "styled-components";
import AuthInput from "../AuthInput";
import AuthFooter from "../Footer";
import { CtaShort } from "@/components/Common/Cta/styled";

interface AuthSectionProps {
  buttonText: string;
  children: ReactNode;
}

function AuthSection({ buttonText, children }: AuthSectionProps) {
  return (
    <Section>
      <form id="form" className="sign-form">
        <div></div>
        <CtaShort>{buttonText}</CtaShort>
      </form>
      <AuthFooter />
    </Section>
  );
}

export default AuthSection;

const Section = styled.section`
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
