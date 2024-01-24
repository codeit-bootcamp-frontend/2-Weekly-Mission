import styled from "styled-components";
import React, { useContext } from "react";
import FolderBadge from "./FolderBadge";
import { FolderInfo, ModalControl } from "../../../types/common";
import { ModalContext } from "../../../contexts/LocaleContext";
import { DataContext } from "../../../contexts/LocaleContext";

function FolderBadgeList() {
  const { folderListInfo } = useContext(DataContext);
  const { openModal } = useContext<ModalControl>(ModalContext);

  return (
    <div>
      <FolderBadgeListBox>
        <FolderBadges>
          {folderListInfo?.map((folder: FolderInfo) => (
            <FolderBadge folder={folder} key={folder.id} />
          ))}
        </FolderBadges>
        <AddLink
          onClick={() => {
            openModal("폴더추가");
          }}
        >
          +
        </AddLink>
      </FolderBadgeListBox>
    </div>
  );
}

const FolderBadgeListBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

const FolderBadges = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const AddLink = styled.div`
  color: var(--primary-color);
  border: none;
  font-size: 3rem;
  padding-left: 3rem;

  @media (max-width: 390px) {
    display: none;
  }
`;

export default FolderBadgeList;
