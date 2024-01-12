import React, { forwardRef } from "react";
import FolderInput from "../FolderInput";
import * as S from "./styled";

const WithFolderInfo = forwardRef<HTMLDivElement, { isInterSecting: boolean }>(function Folder(
  { isInterSecting },
  ref
) {
  return (
    <>
      <S.Wrapper ref={ref}>
        <S.FolderInputContainer $isInterSecting={isInterSecting}>
          <FolderInput />
        </S.FolderInputContainer>
      </S.Wrapper>
    </>
  );
});

export default WithFolderInfo;
