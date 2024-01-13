import { useContext } from "react";
import CategoryList from "./CategoryList";
import { FolderPageData } from "../../../../types/common";
import {
  LocaleContextType,
  LocaleContext,
} from "../../../../contexts/LocaleContext";

function FoldersTitles({
  id,
  searchKeyword,
}: {
  id: number;
  searchKeyword: string;
}) {
  const folderList = useContext<LocaleContextType>(
    LocaleContext
  ) as FolderPageData[];

  const folder = folderList.find((folder) => folder.id === id);

  return (
    <CategoryList
      searchKeyword={searchKeyword}
      key={folder?.id}
      folderName={folder?.name}
    />
  );
}

export default FoldersTitles;
