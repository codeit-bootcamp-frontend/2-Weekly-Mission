import React from "react";
import * as S from "./styled";

function DeleteLink() {
  return (
    <>
      <S.Title>링크 삭제</S.Title>
      <S.SubTitle>https://www.abc.com</S.SubTitle>
      <S.Button color="#ff5b56">삭제하기</S.Button>
    </>
  );
}

export default DeleteLink;
