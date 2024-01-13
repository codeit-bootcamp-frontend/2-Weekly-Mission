import CategoryBox from "./CategoryBox";
import { Folder } from "../../../../types/folder";

function FoldersTitles({
  folderList,
  id,
  openModal,
  searchResult,
}: {
  folderList: Folder[];
  id: number;
  openModal: () => void;
  searchResult: string;
}) {
  return (
    folderList?.length > 0 &&
    folderList.map((folder) => {
      if (folder.id === id) {
        return (
          <CategoryBox
            searchResult={searchResult}
            key={folder.id}
            folder={folder}
            openModal={openModal}
          />
        );
      }
      return null;
    })
  );
}

export default FoldersTitles;
