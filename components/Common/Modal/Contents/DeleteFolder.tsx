import React from "react";
import * as S from "./styled";

function DeleteFolder() {
  return (
    <>
      <S.Title>폴더 삭제</S.Title>
      <S.SubTitle>폴더명</S.SubTitle>
      <S.Button color="#ff5b56">삭제하기</S.Button>
    </>
  );
}

export default DeleteFolder;
