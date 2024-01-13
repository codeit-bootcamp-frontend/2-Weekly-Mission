import CardList from "../components/CardList";
import HeaderFoloderSection from "../components/HeaderFolderSection";
import LinkSearchInput from "../components/LinkSearchInput";
import MainContainer from "../components/MainContainer";
import { transformShareCardData } from "@/utils/TransformData";
import axios from "@/lib/axios";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  const res = await axios.get("/sample/folder");
  const folderData = res.data.folder;
  const cardData = transformShareCardData(res.data.folder.links);

  cardData.forEach((card: any) => {
    if (!card.img) {
      card.img = null;
    }
  });

  return {
    props: { folderData, cardData },
  };
}

export default function Shared({ folderData, cardData }: any) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchData, setSearchData] = useState<any>(cardData);

  useEffect(() => {
    if (searchValue === "") {
      setSearchData(cardData);
    } else {
      const filterSearchData = cardData.filter((items: any) => {
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
      <HeaderFoloderSection folderData={folderData} />
      <MainContainer>
        <LinkSearchInput setSearchValue={setSearchValue} />
        <CardList cardData={searchData} />
      </MainContainer>
    </>
  );
}
