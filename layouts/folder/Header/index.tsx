import React, { forwardRef } from "react";
import FolderAddLink from "@/components/common/AddLink";
import * as S from "./styled";

const WithFolderHeader = forwardRef<HTMLDivElement, { isInterSecting: boolean }>(function Folder(
  { isInterSecting },
  ref
) {
  return (
    <>
      <S.Wrapper ref={ref}>
        <S.FolderInputContainer $isInterSecting={isInterSecting}>
          <FolderAddLink />
        </S.FolderInputContainer>
      </S.Wrapper>
    </>
  );
});

export default WithFolderHeader;
