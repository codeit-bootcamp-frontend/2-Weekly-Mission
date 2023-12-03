import { LayoutMyFolder } from "feature/Layout/LayoutOfMyfolder";
import { MyfolderPage } from "page-layout/SharedPage/MyfolderPage";
import "./global.css";
import { SearchBar } from "./ui/SearchBar";
import { CardList } from "./ui/CardList";
import { ReadOnlyCard } from "ui/ReadOnlyCard";
import { useGetMyFolder } from "data-access/useGetMyFolder";
import { AddLinkbar } from "ui/AddLinkBar/AddLinkbar";
function Folder() {
  const { data } = useGetMyFolder();
  const { created_at, name, user_id, links } = data || {};

  return (
    <LayoutMyFolder>
      <MyfolderPage
        Header={<AddLinkbar />}
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
