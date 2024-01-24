import { useContext } from "react";
import CategoryList from "./CategoryList";
import { DataContext } from "../../../../contexts/LocaleContext";
import { useRouter } from "next/router";
import { FolderInfo } from "../../../../types/common";
import { ParsedUrlQuery } from "querystring";

function FoldersTitles({ searchKeyword }: { searchKeyword: string }) {
  const { folderListInfo } = useContext(DataContext);
  const router = useRouter();
  const { folderId }: ParsedUrlQuery = router.query;

  const folder = folderListInfo.find(
    (folder: FolderInfo) => String(folder.id) === folderId
  );

  return (
    <CategoryList
      searchKeyword={searchKeyword}
      key={folder?.id}
      folderName={folder?.name}
    />
  );
}

export default FoldersTitles;
