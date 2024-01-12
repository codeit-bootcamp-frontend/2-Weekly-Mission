import React, { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styled";

interface CtaProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Cta({ children, ...props }: CtaProps) {
  return <S.Cta {...props}>{children}</S.Cta>;
}

export default Cta;
