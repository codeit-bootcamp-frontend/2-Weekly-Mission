import React, { ReactNode } from "react";
import * as S from "./styled";
function Cta({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return <S.CtaShort onClick={onClick}>{children}</S.CtaShort>;
}

export default Cta;
