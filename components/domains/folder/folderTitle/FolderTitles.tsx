import { useContext } from "react";
import CategoryBox from "./CategoryBox";
import { FolderPageData } from "../../../../types/common";
import { LocaleContextType, LocaleContext } from "../../../../contexts/LocaleContext";

function FoldersTitles({ id, searchKeyword }: { id: number; searchKeyword: string }) {
  const folderList = useContext<LocaleContextType>(LocaleContext) as FolderPageData[];

  return folderList
    .filter((folder) => folder.id === id)
    .map((filteredFolder) => (
      <CategoryBox searchResult={searchKeyword} key={filteredFolder.id} folder={filteredFolder} />
    ));
}

export default FoldersTitles;
