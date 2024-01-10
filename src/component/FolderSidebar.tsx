import styled from "styled-components";
import shareIcon from "../img/share.svg";
import penIcon from "../img/pen.svg";
import deleteIcon from "../img/delete.svg";
import { folderNameChange, shareFolder, deleteFolder } from "../utils/modalItemData";

interface Props {
  folderName: string;
  sideBtnLender: boolean;
  $setIsModalOn: (value: boolean) => void;
  setModalData: any;
  location: string;
}

function FolderSidebar({ folderName, sideBtnLender, $setIsModalOn, setModalData, location }: Props) {
  const url = "http://localhost:3000" + location;

  return (
    <StyledSideBarMainContainer>
      <StyledSelectFolderName>{folderName || "전체"}</StyledSelectFolderName>
      {sideBtnLender === true ? (
        <StyledSideBtnContainer>
          <StyledSideBtn
            onClick={() => {
              $setIsModalOn(true);
              setModalData(shareFolder(folderName, url));
            }}
          >
            <StyledSideBtnImg src={shareIcon} alt="share" />
            공유
          </StyledSideBtn>
          <StyledSideBtn
            onClick={() => {
              $setIsModalOn(true);
              setModalData(folderNameChange);
            }}
          >
            <StyledSideBtnImg src={penIcon} alt="changeName" />
            이름 변경
          </StyledSideBtn>
          <StyledSideBtn
            onClick={() => {
              $setIsModalOn(true);
              setModalData(deleteFolder(url));
            }}
          >
            <StyledSideBtnImg src={deleteIcon} alt="delete" />
            삭제
          </StyledSideBtn>
        </StyledSideBtnContainer>
      ) : null}
    </StyledSideBarMainContainer>
  );
}

const StyledSideBarMainContainer = styled.div`
  display: flex;
  margin: 2.4rem 0;
  justify-content: space-between;
`;

const StyledSideBtnContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const StyledSelectFolderName = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

const StyledSideBtn = styled.span`
  color: #9fa6b2;
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
`;

const StyledSideBtnImg = styled.img``;

export default FolderSidebar;
