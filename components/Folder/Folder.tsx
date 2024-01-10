import React, { useState, useEffect, MouseEventHandler } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import SortMenu from "./SortMenu";
import Card from "./Card";
import Search from "../../pages/folder/search/[search]";
import * as S from "./Styled";
import { ShowAll, FetchFolderData } from "../../pages/folder/[id]";
import { useFoldLink } from "./hooks/useFolder";
import { ChangeNameModal, DeleteFolder, ShareModal } from "./modal/index";
import { FolderData, LinkData } from "../../pages/folder/type";
import Input from "../common/input/input";

function Folder() {
  const [selectSortName, setSelectSortName] = useState<number>(0);
  const [foldLinkTitle, setFoldLinkTitle] = useState<string>("전체");
  const [sortData, setSortData] = useState<FolderData[]>([]);
  const [linkData, setLinkData] = useState<LinkData[]>([]);
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const clickSortName: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setSelectSortName(Number(event.currentTarget.value));
    setFoldLinkTitle(event.currentTarget.title);
  };

  const fetchFolderData = async () => {
    try {
      const folderData: FolderData[] = await FetchFolderData();
      setSortData(folderData);
    } catch (error) {
      console.error("Error fetching folder data:", error);
    }
  };

  const fetchLinkData = async () => {
    try {
      const result: LinkData[] = await ShowAll();
      setLinkData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useFoldLink(selectSortName);
  const foldLink = useFoldLink(selectSortName);

  useEffect(() => {
    fetchFolderData();
  }, []);

  useEffect(() => {
    fetchLinkData();
  }, []);

  const handleShareClick = () => {
    setModalContent("ShareModal");
    setModalOpen(true);
  };

  const handleRenameClick = () => {
    setModalContent("ChangeNameModal");
    setModalOpen(true);
  };

  const handleDeleteClick = () => {
    setModalContent("DeleteFolderModal");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <Section />
      <Search />
      <SortMenu
        data={sortData}
        selectSortName={selectSortName}
        clickSortName={clickSortName}
      />
      <S.CardTitle>
        <S.CardTitleText>{foldLinkTitle}</S.CardTitleText>
        {foldLinkTitle === "전체" ? (
          <></>
        ) : (
          <>
            <S.SortEdit>
              <S.SortEditContent onClick={handleShareClick}>
                <img src={"/assets/Icon/share.svg"} alt="shareImg" />
                <p>공유</p>
              </S.SortEditContent>
              <S.SortEditContent onClick={handleRenameClick}>
                <img src={"/assets/Icon/pen.svg"} alt="penImg" />
                <p>이름 변경</p>
              </S.SortEditContent>
              <S.SortEditContent onClick={handleDeleteClick}>
                <img src={"/assets/Icon/delete.svg"} alt="deleteImg" />
                <p>삭제</p>
              </S.SortEditContent>
            </S.SortEdit>
            {modalOpen && modalContent === "ShareModal" && (
              <ShareModal onClose={handleCloseModal} />
            )}
            {modalOpen && modalContent === "ChangeNameModal" && (
              <ChangeNameModal onClose={handleCloseModal} />
            )}
            {modalOpen && modalContent === "DeleteFolderModal" && (
              <DeleteFolder onClose={handleCloseModal} />
            )}
          </>
        )}
      </S.CardTitle>
      {foldLink && foldLink.length > 0 ? (
        <S.CardBox>
          {foldLink.map((data) => {
            return <Card data={data} key={data.id} />;
          })}
        </S.CardBox>
      ) : (
        <S.NoData>저장된 링크가 없습니다.</S.NoData>
      )}
      <Footer />
    </>
  );
}

export default Folder;
