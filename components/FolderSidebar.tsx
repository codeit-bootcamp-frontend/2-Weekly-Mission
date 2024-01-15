import { baseUrl } from "@/lib/constant";
import { folderNameChange, shareFolder, deleteFolder } from "../utils/modalItemData";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  folderName: string;
  $setIsModalOn: (value: boolean) => void;
  setModalData: any;
}

export default function FolderSidebar({ folderName, $setIsModalOn, setModalData }: Props) {
  const router = useRouter();
  const url = `${baseUrl}` + `${router.asPath}`;

  return (
    <StyledSideBarMainContainer>
      <StyledSelectFolderName>{folderName || "전체"}</StyledSelectFolderName>
      {folderName ? (
        <StyledSideBtnContainer>
          <StyledSideBtn
            onClick={() => {
              $setIsModalOn(true);
              setModalData(shareFolder(folderName, url));
            }}
          >
            <Image src="/svg/share.svg" alt="share" width={18} height={18} />
            공유
          </StyledSideBtn>
          <StyledSideBtn
            onClick={() => {
              $setIsModalOn(true);
              setModalData(folderNameChange);
            }}
          >
            <Image src="/svg/pen.svg" alt="changeName" width={18} height={18} />
            이름 변경
          </StyledSideBtn>
          <StyledSideBtn
            onClick={() => {
              $setIsModalOn(true);
              setModalData(deleteFolder(url));
            }}
          >
            <Image src="/svg/delete.svg" alt="delete" width={18} height={18} />
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
