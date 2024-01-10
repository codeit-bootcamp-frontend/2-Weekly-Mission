import { useContext } from "react";
import CategoryBox from "./CategoryBox";
import { Folder } from "../../../../types/folder";
import LocaleContext from "../../../../contexts/LocaleContext";

function FoldersTitles({
  id,
  openModal,
  searchResult,
}: {
  id: number;
  openModal: () => void;
  searchResult: string;
}) {
  const locale = useContext<Folder[]>(LocaleContext);

  return locale
    .filter((folder) => folder.id === id)
    .map((filteredFolder) => (
      <CategoryBox
        searchResult={searchResult}
        key={filteredFolder.id}
        folder={filteredFolder}
        openModal={openModal}
      />
    ));
}

export default FoldersTitles;
