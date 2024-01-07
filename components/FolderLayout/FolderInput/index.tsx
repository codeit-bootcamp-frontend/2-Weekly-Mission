import React from "react";
import LinkIcon from "@/public/icons/link.svg";
import * as S from "./styled";

function FolderInput() {
  return (
    <S.Wrapper>
      <S.SearchIcon as={LinkIcon} />
      <S.Input placeholder="링크를 추가해 보세요." />
      <S.Button onClick={() => console.log("links")}>추가하기</S.Button>
    </S.Wrapper>
  );
}

export default FolderInput;
