import { useContext } from "react";
import CategoryBox from "./CategoryBox";
import { Folder } from "../../../../types/folder";
import { LocaleContext } from "../../../../contexts/LocaleContext";

function FoldersTitles({
  id,
  searchResult,
}: {
  id: number;
  searchResult: string;
}) {
  const folderList = useContext<Folder[]>(LocaleContext);

  return folderList
    .filter((folder) => folder.id === id)
    .map((filteredFolder) => (
      <CategoryBox
        searchResult={searchResult}
        key={filteredFolder.id}
        folder={filteredFolder}
      />
    ));
}

export default FoldersTitles;
