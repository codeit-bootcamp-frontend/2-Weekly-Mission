import React from "react";
import styled from "styled-components";
import Image from "next/image";

function FolderShared({ onConfirm }: { onConfirm: () => void }) {
  return (
    <Layout>
      <span>폴더명</span>
      <SnsBoxLayout>
        <SnsBox>
          <Image
            src="/images/modal-kakao.png"
            width={42}
            height={42}
            alt="카카오 아이콘"
          />
          <div>카카오톡</div>
        </SnsBox>
        <SnsBox>
          <Image
            src="/images/modal-facebook.png"
            width={42}
            height={42}
            alt="페이스북 아이콘"
          />
          <div>페이스북</div>
        </SnsBox>
        <SnsBox>
          <Image
            src="/images/modal-link.png"
            width={42}
            height={42}
            alt="링크 아이콘"
          />
          <div>링크복사</div>
        </SnsBox>
      </SnsBoxLayout>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  & span {
    margin-top: 0.8rem;
    color: #9fa6b2;
    font-size: 1.4rem;
  }
`;

const SnsBoxLayout = styled.div`
  display: flex;
  gap: 3.2rem;
  font-size: 1.3rem;
  color: rgba(68, 68, 68, 1);
`;
const SnsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export default FolderShared;
