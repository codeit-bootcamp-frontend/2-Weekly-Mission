import { Layout } from "../feature/Layout/Layout";
import { SharedPage } from "../page-layout/SharedPage/SharedPage";
import { FolderInfo } from "../ui/FolderInfo/FolderInfo";
import { SearchBar } from "../ui/SearchBar/SearchBar";
import { CardList } from "../ui/CardList/CardList";
import { useGetFolder } from "../data-access/useGetFolder";
import { ReadOnlyCard } from "../ui/ReadOnlyCard/ReadOnlyCard";

function Shared() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <Layout>
      <SharedPage
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
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

export { Shared };
