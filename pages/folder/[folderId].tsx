import { useEffect, useState } from "react";
import AddLinkBanner from "../../components/domains/folder/AddLinkBanner";
import CardList from "../../components/commons/CardList";
import SearchInput from "../../components/commons/SearchInput";
import styles from "../../styles/folderPage.module.css";
import FolderBadgeList from "../../components/domains/folder/FolderBadgeList";
import FolderTitles from "../../components/domains/folder/folderTitle/FolderTitles";
import FloatingButton from "../../components/domains/folder/FloatingButton";
import { getSelectData } from "../api/FolderApi";
import { Link } from "../../types/common";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext } from "../../contexts/LocaleContext";
import { ParsedUrlQuery } from "querystring";

function FolderPage() {
  const [selectFolderLinks, setSelectFolderLinks] = useState<Link[]>([]);
  const [searchLinks, setSearchLinks] = useState<Link[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const router = useRouter();
  const { folderId }: ParsedUrlQuery = router.query;
  const { folderAllLinkInfo } = useContext(DataContext);

  const searchLink = async (keyword: string) => {
    const filteredLinks = selectFolderLinks.filter(
      (link: Link) =>
        link.url?.includes(keyword) ||
        link.title?.includes(keyword) ||
        link.description?.includes(keyword)
    );
    setSearchLinks(filteredLinks);
  };

  const handleSelectFolderLoad = async (folderId: string) => {
    const data = await getSelectData(folderId);
    setSelectFolderLinks(data);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/signin");
    }
  }, [folderId]);

  return (
    <>
      <AddLinkBanner />
      <section className={styles.contentFlex}>
        <div className={styles.contentBox}>
          <SearchInput
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            onSearch={searchLink}
          />
          <FolderBadgeList />
          <FolderTitles searchKeyword={searchKeyword} />
          {folderId === "0" ? (
            <CardList links={folderAllLinkInfo} />
          ) : (
            <CardList links={selectFolderLinks} />
          )}
        </div>
      </section>
      <FloatingButton />
    </>
  );
}

export default FolderPage;
