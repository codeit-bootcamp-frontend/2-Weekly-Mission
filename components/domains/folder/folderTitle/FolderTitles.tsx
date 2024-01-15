<<<<<<< HEAD
import { useContext } from "react";
import CategoryList from "./CategoryList";
import { FolderPageData } from "../../../../types/common";
import {
  DataContextType,
  DataContext,
} from "../../../../contexts/LocaleContext";

function FoldersTitles({
  id,
  searchKeyword,
}: {
  id: number;
  searchKeyword: string;
}) {
  const folderList = useContext<DataContextType>(
    DataContext
  ) as FolderPageData[];

  const folder = folderList.find((folder) => folder.id === id);

  return (
    <CategoryList
      searchKeyword={searchKeyword}
      key={folder?.id}
      folderName={folder?.name}
    />
=======
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
>>>>>>> 9bacc8e68dc1e52872a7fafc52aece3ad4355f7c
  );
}

export default FoldersTitles;
