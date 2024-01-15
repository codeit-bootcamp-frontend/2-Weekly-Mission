import React from "react";
import styled from "styled-components";
import { ModalLayout, DeleteModalModalBox, RedButton } from "./Modal";
import CloseButton from "./CloseButton";

function LinkAddModal({ onConfirm }: { onConfirm: () => void }) {
  return (
    <ModalLayout>
      <DeleteModalModalBox>
        <CloseButton onClick={onConfirm} />
        <h3>폴더에 추가</h3>
        <p>링크 주소</p>
        <FolderList>
          <Folder>
            <span>코딩팁</span>
            <div>7개의 링크</div>
          </Folder>
          <Folder>
            <span>코딩팁</span>
            <div>7개의 링크</div>
          </Folder>
        </FolderList>
        <RedButton onClick={onConfirm} type="button">
          추가하기
        </RedButton>
      </DeleteModalModalBox>
    </ModalLayout>
  );
}

const FolderList = styled.ul`
  padding: 0;
  margin-bottom: 2.4rem;
`;

const Folder = styled.li`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  & span {
    font-size: 1.6rem;
    color: rgba(55, 55, 64, 1);
  }

  & div {
    font-size: 1.4rem;
    color: rgba(159, 166, 178, 1);
  }
`;

export default LinkAddModal;
