import CardList from "../components/CardList";
import HeaderFoloderSection from "../components/HeaderFolderSection";
import LinkSearchInput from "../components/LinkSearchInput";
import MainContainer from "../components/MainContainer";
import { transformShareCardData } from "@/utils/TransformData";
import axios from "@/lib/axios";

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
  console.log(cardData);

  return (
    <>
      <HeaderFoloderSection folderData={folderData} />
      <MainContainer>
        <LinkSearchInput />
        <CardList cardData={cardData} />
      </MainContainer>
    </>
  );
}
