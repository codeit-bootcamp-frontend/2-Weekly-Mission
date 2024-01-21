import { useEffect, useState } from "react";
import AddLinkBanner from "../../components/domains/folder/AddLinkBanner";
import CardList from "../../components/commons/CardList";
import SearchInput from "../../components/commons/SearchInput";
import styles from "../../styles/folderPage.module.css";
import FolderBadgeList from "../../components/domains/folder/FolderBadgeList";
import FolderTitles from "../../components/domains/folder/folderTitle/FolderTitles";
import FloatingButton from "../../components/domains/folder/FloatingButton";
import { getAllLinksData, getUserFoldersData } from "../api/FolderApi";
import { FolderPageData } from "../../types/common";
import { Link } from "../../types/common";
import { FolderDataContext } from "../../contexts/LocaleContext";
import { useRouter } from "next/router";

function FolderPage() {
  const [folderList, setFolderList] = useState<FolderPageData[]>([]);
  const [selectFolderLinks, setSelectFolderLinks] = useState<Link[]>([]);
  const [id, setId] = useState<number>(0);
  const [searchLinks, setSearchLinks] = useState<Link[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const router = useRouter();

  const handleFoldersLoad = async () => {
    const allLinksFolder: FolderPageData = {
      id: 0,
      favorite: false,
      name: "전체",
      user_id: 1,
      links: [
        {
          id: 0,
          url: "",
          title: "",
          image_source: "",
          created_at: ""
        }
      ]
    };

    const allData = await getAllLinksData();
    const { data } = await getUserFoldersData();
    allLinksFolder.links = allData.data;
    setFolderList([allLinksFolder, ...data]);
  };

  const searchLink = async (keyword: string) => {
    const filteredLinks = folderList[0].links?.filter(
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
    handleFoldersLoad();
  }, [id]);

  return (
    <FolderDataContext.Provider value={folderList}>
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
            <CardList links={folderList} />
          ) : (
            <CardList links={searchLinks} />
          )}
        </div>
      </section>
      <FloatingButton />
    </FolderDataContext.Provider>
  );
}

export default FolderPage;
