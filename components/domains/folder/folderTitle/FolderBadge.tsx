import styled from "styled-components";
import React from "react";
import { getSelectData } from "../../../../pages/api/FolderApi";
import { FolderPageData, Link } from "../../../../types/common";

function FolderBadge({
  folder,
  setSelectFolderLinks,
  setId
}: {
  folder: FolderPageData;
  setSelectFolderLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleChangeID = async () => {
    const { data } = await getSelectData(folder.id);
    setSelectFolderLinks(data);
    setId(folder.id);
  };

  return (
    <Button
      onClick={() => {
        handleChangeID();
      }}
    >
      {folder && folder.name}
    </Button>
  );
}
const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid var(--primary-color);
  font-size: 1.6rem;
  border-radius: 0.5rem;
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
    color: #ffffff;
  }

  /* Mobile*/
  @media (max-width: 390px) {
    padding: 0.6rem 1.2rem;
  }
`;

export default FolderBadge;
