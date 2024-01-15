import FolderSidebar from "./FolderSidebar";
import FolderFilterButton from "./FolderBtn";
import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";
import { addFolder } from "../utils/modalItemData";
import { IPFolderData } from "../utils/type";
import Link from "next/link";

interface Props {
  folderListData: IPFolderData[];
  p: number;
  // handleData: (value: IPFolderData) => void;
  // handleSideBtn: (value: boolean) => void;
  folderName?: string;
}

export default function FolderBtnList({ folderListData, p, folderName }: Props) {
  const [isModalOn, setIsModalOn] = useState(false);
  const [modalData, setModalData] = useState({});

  return (
    <>
      <Modal $setIsModalOn={setIsModalOn} $isModalOn={isModalOn} modalData={modalData} />
      <StyledFolderFilterBtnContainer>
        <StyledFolderFilterBtnItemContainer>
          <Link href="/folder">
            <StyledFolderFilterBtn $isMatching={p} onClick={() => {}}>
              전체
            </StyledFolderFilterBtn>
          </Link>
          {folderListData.map((data) => {
            return <FolderFilterButton key={data.id} data={data} p={p} />;
          })}
        </StyledFolderFilterBtnItemContainer>
        <StyledFolderAddBtn
          onClick={() => {
            setIsModalOn(true);
            setModalData(addFolder);
          }}
        >
          폴더 추가 +
        </StyledFolderAddBtn>
      </StyledFolderFilterBtnContainer>
      <FolderSidebar $setIsModalOn={setIsModalOn} setModalData={setModalData} folderName={folderName} />
    </>
  );
}

const StyledFolderFilterBtn = styled.button<{ $isMatching: number }>`
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: ${({ $isMatching }) => (!$isMatching ? "#6d6afe" : "#fff")};
  color: ${({ $isMatching }) => (!$isMatching ? "#fff" : "#000")};
  padding: 0.8rem 1.2rem;
  font-size: 16px;
  font-weight: 400;
  margin-right: 0.8rem;
  cursor: pointer;

  &:hover {
    background: #6d6afe;
    color: #fff;
  }
`;

const StyledFolderFilterBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledFolderFilterBtnItemContainer = styled.div`
  display: flex;
  gap: 1rem 0;
  flex-wrap: wrap;
`;

const StyledFolderAddBtn = styled.button`
  color: #6d6afe;
  font-size: 16px;
  font-weight: 500;
  border: none;
  background-color: #fff;
  cursor: pointer;
  white-space: nowrap;

  @media all and (max-width: 768px) {
    position: fixed;
    bottom: 10.1rem;
    z-index: 999;
    right: 50%;
    transform: translate(50%, 0);
    color: white;
    border-radius: 20px;
    border: 1px solid #fff;
    background: #6d6afe;
    padding: 0.8rem 2.4rem;
    transition: background 0.3s;

    &:hover {
      background: #4b4bff;
    }
  }
`;
