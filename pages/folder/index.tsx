import { useContext, useEffect, useState } from "react";
import AddLinkBanner from "../../components/domains/folder/AddLinkBanner";
import CardList from "../../components/commons/CardList";
import SearchInput from "../../components/commons/SearchInput";
import styles from "../../styles/folderPage.module.css";
import FolderBadgeList from "../../components/domains/folder/FolderBadgeList";
import FolderTitles from "../../components/domains/folder/folderTitle/FolderTitles";
import FloatingButton from "../../components/domains/folder/FloatingButton";
import { Link } from "../../types/common";
import { DataContext } from "../../contexts/LocaleContext";
import { useRouter } from "next/router";

function FolderPage() {
  const [searchLinks, setSearchLinks] = useState<Link[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const router = useRouter();
  const { folderAllLinkInfo } = useContext(DataContext);

  const searchLink = async (keyword: string) => {
    const filteredLinks = folderAllLinkInfo.filter(
      (link: Link) =>
        link.url?.includes(keyword) ||
        link.title?.includes(keyword) ||
        link.description?.includes(keyword)
    );
    setSearchLinks(filteredLinks);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/signin");
    }
  }, []);

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
          {searchKeyword == "" ? (
            <CardList links={folderAllLinkInfo} />
          ) : (
            <CardList links={searchLinks} />
          )}
        </div>
      </section>
      <FloatingButton />
    </>
  );
}

export default FolderPage;
