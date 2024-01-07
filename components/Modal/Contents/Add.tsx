import React from "react";
import * as S from "./styled";

function Add() {
  return (
    <>
      <S.Title>폴더 추가</S.Title>
      <S.Input placeholder="내용 입력" />
      <S.Button>추가하기</S.Button>
    </>
  );
}

export default Add;
