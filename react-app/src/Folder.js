import { LayoutMyFolder } from "feature/Layout/LayoutOfMyfolder";
import { MyfolderPage } from "page-layout/SharedPage/MyfolderPage";
import { SearchBar } from "./ui/SearchBar";
import { CardList } from "./ui/CardList";
import { AddLinkbar } from "ui/AddLinkBar/AddLinkbar";
import { useGetMyLinks } from "data-access/useGetMyLinks";
import { FolderCards } from "ui/ReadOnlyCard/CardsOfFolder";
import "./global.css";
import { Category } from "ui/Category";
import { useGetMyFolder } from "data-access/useGetMyFolder";
import { CategoryButtons } from "ui/CategoryButtons";
import { useState, useEffect } from "react";

function Folder() {
  // const [myLinks, setMyLinks] = useState();
  // const [myFolder, setMyFolder] = useState();
  const { data: MyfolderData } = useGetMyFolder();
  const { data: MyLinksData } = useGetMyLinks();

  return (
    <LayoutMyFolder>
      <MyfolderPage
        Header={<AddLinkbar />}
        searchBar={<SearchBar />}
        button={
          <Category>
            {MyfolderData?.data.map((data) => (
              <CategoryButtons key={data?.id} {...data} />
            ))}
          </Category>
        }
        cardList={
          <CardList>
            {MyLinksData?.data.map((data) => (
              <FolderCards key={data?.id} {...data} />
            ))}
          </CardList>
        }
      />
    </LayoutMyFolder>
  );
}

export default Folder;
