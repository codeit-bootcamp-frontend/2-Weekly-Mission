import React from "react";
import styled from "styled-components";

function LinkAddModal({ onConfirm }: { onConfirm: () => void }) {
  return (
    <Layout>
      <div>링크 주소</div>
      <FolderList>
        <Folder>
          <h6>코딩팁</h6>
          <div>7개의 링크</div>
        </Folder>
        <Folder>
          <h6>코딩팁</h6>
          <div>7개의 링크</div>
        </Folder>
      </FolderList>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    font-size: 1.4rem;
    margin-top: 0.8rem;
    color: rgba(159, 166, 178, 1);
  }
`;

const FolderList = styled.ul`
  width: 100%;
  padding: 2.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

const Folder = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  & h6 {
    font-size: 1.6rem;
    font-weight: 400;
    color: rgba(55, 55, 64, 1);
  }

  & div {
    font-size: 1.4rem;
    color: rgba(159, 166, 178, 1);
    margin-top: 0;
  }
`;

export default LinkAddModal;
