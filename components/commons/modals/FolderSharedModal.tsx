import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ModalLayout, FolderSharedModalBox } from "./Modal";
import CloseButton from "./CloseButton";

function FolderSharedModal({ onConfirm }: { onConfirm: () => void }) {
  return (
    <ModalLayout>
      <FolderSharedModalBox>
        <CloseButton onClick={onConfirm} />
        <h3>폴더 공유</h3>
        <p>폴더명</p>
        <SnsListBox>
          <SnsBox>
            <Image src="/images/modal-kakao.png" width={42} height={42} alt="카카오 아이콘" />
            <div>카카오톡</div>
          </SnsBox>
          <SnsBox>
            <Image src="/images/modal-facebook.png" width={42} height={42} alt="페이스북 아이콘" />
            <div>페이스북</div>
          </SnsBox>
          <SnsBox>
            <Image src="/images/modal-link.png" width={42} height={42} alt="링크 아이콘" />
            <div>링크복사</div>
          </SnsBox>
        </SnsListBox>
      </FolderSharedModalBox>
    </ModalLayout>
  );
}

const SnsListBox = styled.div`
  display: flex;
  gap: 3.2rem;
  font-size: 1.3rem;
  color: rgba(68, 68, 68, 1);
`;
const SnsBox = styled.div`
  & div {
    margin-top: 10px;
  }
`;

export default FolderSharedModal;
