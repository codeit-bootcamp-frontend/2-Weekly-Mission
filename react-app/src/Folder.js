import { LayoutMyFolder } from "feature/Layout/LayoutOfMyfolder";
import { MyfolderPage } from "page-layout/SharedPage/MyfolderPage";
import "./global.css";
import { FolderInfo } from "./ui/FolderInfo";
import { SearchBar } from "./ui/SearchBar";
import { CardList } from "./ui/CardList";
import { ReadOnlyCard } from "ui/ReadOnlyCard";
import { useGetMyFolder } from "data-access/useGetMyFolder";

function Folder() {
  const { data } = useGetMyFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <LayoutMyFolder>
      <MyfolderPage
        folderInfo={<FolderInfo profileImage={profileImage} ownerName={ownerName} folderName={folderName} />}
        searchBar={<SearchBar />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </LayoutMyFolder>
  );
}

export default Folder;
