import React from "react";
import LinkIcon from "@/public/icons/link.svg";
import * as S from "./styled";

function FolderAddLink() {
  return (
    <S.Wrapper>
      <S.SearchIcon as={LinkIcon} />
      <S.Input placeholder="링크를 추가해 보세요." />
      <S.Button $type="short" onClick={() => console.log("links")}>
        추가하기
      </S.Button>
    </S.Wrapper>
  );
}

export default FolderAddLink;
