import React, { forwardRef } from "react";
import * as S from "./styled";
import AddLink from "@/components/common/AddLink";

const WithFolderHeader = forwardRef<HTMLDivElement, { isInterSecting: boolean }>(function Folder(
  { isInterSecting },
  ref
) {
  return (
    <>
      <S.Wrapper ref={ref}>
        <S.FolderInputContainer $isInterSecting={isInterSecting}>
          <AddLink />
        </S.FolderInputContainer>
      </S.Wrapper>
    </>
  );
});

export default WithFolderHeader;
