import styled from "styled-components";
import React, { useContext } from "react";
import { getSelectData } from "../../../pages/api/FolderApi";
import { FolderPageData } from "../../../types/common";
import { Link, OpenModal } from "../../../types/common";
import { ModalContext, LocaleContext } from "../../../contexts/LocaleContext";
import { LocaleContextType } from "../../../contexts/LocaleContext";

function Button({
  folder,
  setSelectFolderLinks,
  setId,
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
    <StyledButton
      onClick={() => {
        handleChangeID();
      }}
    >
      {folder && folder.name}
    </StyledButton>
  );
}

function FolderButtonList({
  setSelectFolderLinks,
  setId,
}: {
  setSelectFolderLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const locale = useContext<LocaleContextType>(LocaleContext) as FolderPageData[];
  const { openModal } = useContext<OpenModal>(ModalContext);
  return (
    <div>
      <StyledButtonBox>
        <StyledButtons>
          {locale?.map((folder) => (
            <Button folder={folder} key={folder.id} setSelectFolderLinks={setSelectFolderLinks} setId={setId} />
          ))}
        </StyledButtons>
        <StyledAddLink
          onClick={() => {
            openModal("폴더추가");
          }}
        >
          +
        </StyledAddLink>
      </StyledButtonBox>
    </div>
  );
}

const StyledButton = styled.button`
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

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const StyledAddLink = styled.div`
  color: var(--primary-color);
  border: none;
  font-size: 3rem;
  padding-left: 3rem;

  @media (max-width: 390px) {
    display: none;
  }
`;

export default FolderButtonList;
