import { useContext } from "react";
import CategoryList from "./CategoryList";
import { FolderDataContext } from "../../../../contexts/LocaleContext";
import { useRouter } from "next/router";
import { FolderInfo } from "../../../../types/common";
import { ParsedUrlQuery } from "querystring";

function FoldersTitles({ searchKeyword }: { searchKeyword: string }) {
  const router = useRouter();
  const { folderList } = useContext(FolderDataContext);
  const { folderId }: ParsedUrlQuery = router.query;
  const folder = folderList?.find(
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
