import { Outlet, useLocation } from "react-router-dom";
import HeaderSearchSection from "../component/HeaderSearchSection";
import MainContainer from "../component/MainContainer";
import FolderFilterButtonList from "../component/FolderFilterButtonList";
import LinkSearchInput from "../component/LinkSearchInput";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IPFolderData } from "../utils/type";

interface Props {
  psFolderData: IPFolderData[];
  handleData: (value: IPFolderData) => void;
  folderName: string;
  setSearchLinkValue: (value: string) => void;
  searchLinkValue: string;
  footerRef: any;
}

function Folder({ psFolderData, handleData, folderName, setSearchLinkValue, searchLinkValue, footerRef }: Props) {
  const [sideBtnLender, setSideBtnLender] = useState(false);
  const location = useLocation();
  const [linkSearchInputOb, setLinkSearchInputOb] = useState<boolean>(false);
  const [footerOb, setFooterOb] = useState<boolean>(false);
  const headerLinkAddInput = useRef<HTMLDivElement>(null);
  const linkSearchInput = useRef<any>(null);

  useEffect(() => {
    const observerLinkSearchInput = new IntersectionObserver((e) => {
      e.forEach((element) => {
        if (!element.isIntersecting) {
          setLinkSearchInputOb(true);
        } else if (element.isIntersecting) {
          setLinkSearchInputOb(false);
        }
      });
    });

    const observerFooter = new IntersectionObserver((e) => {
      e.forEach((e) => {
        if (e.isIntersecting) {
          setFooterOb(true);
        } else if (headerLinkAddInput) {
          setFooterOb(false);
        }
      });
    });

    observerLinkSearchInput.observe(linkSearchInput.current);
    observerFooter.observe(footerRef.current);

    return () => {
      observerLinkSearchInput.disconnect();
      observerFooter.disconnect();
    };
  });

  return (
    <>
      <HeaderSearchSection setRef={headerLinkAddInput} linkSearchInputOb={linkSearchInputOb} footerOb={footerOb} />
      <MainContainer>
        <LinkSearchInput setSearchLinkValue={setSearchLinkValue} value={searchLinkValue} setRef={linkSearchInput} />
        <FolderFilterButtonList
          psFolderData={psFolderData} // 폴더전체데이터
          handleData={handleData} // 누르는 버튼 데이터 보내기
          handleSideBtn={setSideBtnLender} // 각 폴더 누를때 사이드버튼 true false값 반환하는 함수
          sideBtnLender={sideBtnLender} // 사이드버튼 렌더값
          folderName={folderName} // 폴더이름표시
          location={location.pathname}
        />
        <StyledCardListBackground>
          <Outlet />
        </StyledCardListBackground>
      </MainContainer>
    </>
  );
}

const StyledCardListBackground = styled.div`
  position: relative;
  min-height: 29.5rem;
`;

export default Folder;
