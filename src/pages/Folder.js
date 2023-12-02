import { Layout } from "../feature/Layout/Layout";
import { SharedPage } from "../page-layout/SharedPage/SharedPage";
import { SearchBar } from "../ui/SearchBar/SearchBar";
import { CardList } from "../ui/CardList/CardList";
import { useGetFolder } from "../data-access/useGetFolder";
import { ReadOnlyCard } from "../ui/ReadOnlyCard/ReadOnlyCard";
import { AddBar } from "../ui/AddBar/AddBar";

export function Folder() {
  const { data } = useGetFolder();
  const { links } = data || {};

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
