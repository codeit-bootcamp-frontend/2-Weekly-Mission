import CardList from "@/components/CardList";
import HeaderSearchSection from "@/components/HeaderSearchSection";
import LinkSearchInput from "@/components/LinkSearchInput";
import MainContainer from "@/components/MainContainer";
import FolderBtnList from "@/components/FolderBtnList";
import { transformLinkData } from "@/utils/TransformData";
import styled from "styled-components";
import axios from "@/lib/axios";
import { useRef, useState, useEffect } from "react";

export async function getServerSideProps(context: any) {
  const p = context.params["id"];
  const folderId = Number(p);

  const cardDataRes = await axios.get("/users/1/Links");
  const cardData = transformLinkData(cardDataRes.data.data);

  const FolderDataRes = await axios.get("/users/1/folders");
  const folderListData = FolderDataRes.data.data;

  const filterData = cardData.filter((items: any) => items.folderId === folderId);
  const folderName = folderListData.find((item: any) => item.id === folderId)?.name;

  cardData.forEach((card: any) => {
    if (!card.img) {
      card.img = null;
    }
  });

  return {
    props: { folderListData, filterData, folderId, folderName },
  };
}

export default function folderId({ folderListData, filterData, folderId, folderName, footerRef }: any) {
  const [linkSearchInputOb, setLinkSearchInputOb] = useState<boolean>(false);
  const [footerOb, setFooterOb] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchData, setSearchData] = useState<any>(filterData);
  const headerLinkAddInput = useRef<HTMLDivElement>(null);
  const linkSearchInput = useRef<any>(null);

  useEffect(() => {
    const observerLinkSearchInput = new IntersectionObserver((e) => {
      e.forEach((e) => {
        if (e.isIntersecting) {
          setLinkSearchInputOb(true);
        } else {
          setLinkSearchInputOb(false);
        }
      });
    });

    const observerFooter = new IntersectionObserver((e) => {
      e.forEach((e) => {
        if (e.isIntersecting) {
          setFooterOb(true);
        } else {
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

  useEffect(() => {
    if (searchValue === "") {
      setSearchData(filterData);
    } else {
      const filterSearchData = filterData.filter((items: any) => {
        return (
          items.url?.includes(searchValue) ||
          items.title?.includes(searchValue) ||
          items.description?.includes(searchValue)
        );
      });
      setSearchData(filterSearchData);
    }
  }, [searchValue, filterData]);

  return (
    <>
      <HeaderSearchSection setRef={headerLinkAddInput} linkSearchInputOb={linkSearchInputOb} footerOb={footerOb} />
      <MainContainer>
        <LinkSearchInput setRef={linkSearchInput} value={searchValue} setSearchValue={setSearchValue} />
        <FolderBtnList folderListData={folderListData} p={folderId} folderName={folderName} />
        <StyledCardListBackground>
          <CardList cardData={searchData} folderListData={folderListData} />
        </StyledCardListBackground>
      </MainContainer>
    </>
  );
}

const StyledCardListBackground = styled.div`
  position: relative;
  min-height: 29.5rem;
`;
