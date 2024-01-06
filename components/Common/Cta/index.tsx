import React, { ReactNode } from "react";
import * as S from "./styled";
function Cta({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return <S.Cta onClick={onClick}>{children}</S.Cta>;
}

export default Cta;
