import React from "react";
import * as S from "./styled";

function Spinner() {
  return (
    <S.LoadingSpinner>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </S.LoadingSpinner>
  );
}

export default Spinner;
