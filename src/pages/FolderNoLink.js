import { Layout } from "../feature/Layout/Layout";
import { SharedPage } from "../page-layout/SharedPage/SharedPage";
import { SearchBar } from "../ui/SearchBar/SearchBar";
import { useGetFolder } from "../data-access/useGetFolder";
import { AddBar } from "../ui/AddBar/AddBar";
import { NoResultBox } from "../ui/NoResultBox/NoResultBox";

export function FolderNoLink() {
  const { data } = useGetFolder();

  return (
    <Layout>
      <SharedPage folderInfo={<AddBar />} searchBar={<SearchBar />} />
      <NoResultBox>저장된 링크가 없습니다.</NoResultBox>
    </Layout>
  );
}
