import CardList from "@/components/CardList";
import HeaderSearchSection from "@/components/HeaderSearchSection";
import LinkSearchInput from "@/components/LinkSearchInput";
import MainContainer from "@/components/MainContainer";
import { transformFolderCardData } from "@/utils/TransformData";
import FolderFilterButtonList from "@/components/FolderBtnList";
import styled from "styled-components";
import axios from "@/lib/axios";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { IPFolderData, ITransformCardData } from "@/utils/type";
import Head from "next/head";

interface Props {
  folderListData: IPFolderData[];
  cardData: ITransformCardData[];
  footerRef: React.RefObject<HTMLDivElement>;
}

export async function getServerSideProps() {
  const cardDataRes = await axios.get("/users/1/Links");
  const cardData = transformFolderCardData(cardDataRes.data.data);

  const FolderDataRes = await axios.get("/users/1/folders");
  const folderListData = FolderDataRes.data.data;

  return {
    props: { cardData, folderListData },
  };
}

export default function folder({ cardData, folderListData, footerRef }: Props) {
  const [linkSearchInputOb, setLinkSearchInputOb] = useState<boolean>(false);
  const [footerOb, setFooterOb] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchData, setSearchData] = useState<any>(cardData);
  const headerLinkAddInput = useRef<HTMLDivElement>(null);
  const linkSearchInput = useRef<HTMLFormElement>(null);
  const folderId = Number(useRouter().query.id);

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

    if (linkSearchInput.current) {
      observerLinkSearchInput.observe(linkSearchInput.current);
    }

    if (footerRef.current) {
      observerFooter.observe(footerRef.current);
    }

    return () => {
      observerLinkSearchInput.disconnect();
      observerFooter.disconnect();
    };
  });

  useEffect(() => {
    if (searchValue === "") {
      setSearchData(cardData);
    } else {
      const filterSearchData = cardData.filter((items: ITransformCardData) => {
        return (
          items.url?.includes(searchValue) ||
          items.title?.includes(searchValue) ||
          items.description?.includes(searchValue)
        );
      });
      setSearchData(filterSearchData);
    }
  }, [searchValue, cardData]);

  return (
    <>
      <Head>
        <title>Folder</title>
      </Head>
      <HeaderSearchSection setRef={headerLinkAddInput} linkSearchInputOb={linkSearchInputOb} footerOb={footerOb} />
      <MainContainer>
        <LinkSearchInput setRef={linkSearchInput} value={searchValue} setSearchValue={setSearchValue} />
        <FolderFilterButtonList folderListData={folderListData} p={folderId} />
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
