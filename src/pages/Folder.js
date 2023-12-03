import { Layout } from "../feature/Layout/Layout";
import { SharedPage } from "../page-layout/SharedPage/SharedPage";
import { SearchBar } from "../ui/SearchBar/SearchBar";
import { CardList } from "../ui/CardList/CardList";
import { getFolderLink } from "../data-access/Api";
import { ReadOnlyCard } from "../ui/ReadOnlyCard/ReadOnlyCard";
import { AddBar } from "../ui/AddBar/AddBar";
import { useEffect, useState } from "react";

export function Folder() {
  const [links, setLinks] = useState([]);

  const folderLinks = async () => {
    const data = await getFolderLink();
    setLinks(data);
  };

  useEffect(() => {
    folderLinks();
  }, []);

  return (
    <Layout>
      <SharedPage
        folderInfo={<AddBar />}
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
}
