import CardList from "../components/CardList";
import HeaderFoloderSection from "../components/HeaderFolderSection";
import LinkSearchInput from "../components/LinkSearchInput";
import MainContainer from "../components/MainContainer";
import { transformShareCardData } from "@/utils/TransformData";
import axios from "@/lib/axios";
import { useState, useEffect } from "react";
import { ITransformCardData, IUserFolderData } from "@/utils/type";
import Head from "next/head";

interface Props {
  folderData: IUserFolderData;
  cardData: ITransformCardData[];
}

export async function getStaticProps() {
  const res = await axios.get("/sample/folder");
  const folderData = res.data.folder;
  const cardData = transformShareCardData(res.data.folder.links);

  cardData.forEach((card) => {
    if (!card.img) {
      card.img = "";
    }
  });

  return {
    props: { folderData, cardData },
  };
}

export default function Shared({ folderData, cardData }: Props) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchData, setSearchData] = useState<ITransformCardData[]>(cardData);

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
        <title>shared</title>
      </Head>
      <HeaderFoloderSection folderData={folderData} />
      <MainContainer>
        <LinkSearchInput setSearchValue={setSearchValue} />
        <CardList cardData={searchData} />
      </MainContainer>
    </>
  );
}
