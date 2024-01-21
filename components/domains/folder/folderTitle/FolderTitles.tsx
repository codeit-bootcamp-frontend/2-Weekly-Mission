import { useContext } from "react";
import CategoryList from "./CategoryList";
import { FolderPageData } from "../../../../types/common";
import { FolderDataContext } from "../../../../contexts/LocaleContext";
import { useRouter } from "next/router";
function FoldersTitles({ searchKeyword }: { searchKeyword: string }) {
  const folderList = useContext<FolderPageData[]>(FolderDataContext);
  const router = useRouter();
  const { folderId } = router.query;

  const folder = folderList.find((folder) => folder.id === +folderId);

  return (
    <CategoryList
      searchKeyword={searchKeyword}
      key={folder?.id}
      folderName={folder?.name}
    />
  );
}

export default FoldersTitles;
