import { useContext, useEffect, useState } from "react";
import Banner from "../components/domains/folder/Banner";
import CardList from "../components/commons/CardList";
import SearchInput from "../components/commons/SearchInput";
import styles from "../styles/folderPage.module.css";
import FolderButtonList from "../components/domains/folder/FolderButtonList";
import FolderTitles from "../components/domains/folder/folderTitle/FolderTitles";
import FloatingButton from "../components/domains/folder/FloatingButton";
import { getAllLinksData, getFoldersData } from "./api/FolderApi";
import { Folder } from "../types/folder";
import { Link } from "../types/common";
import { LocaleContext } from "../contexts/LocaleContext";

function FolderPage() {
  const [folderList, setFolderList] = useState<Folder[]>([]);
  const [selectFolderLinks, setSelectFolderLinks] = useState<Link[]>([]);
  const [id, setId] = useState<number>(0);
  const [searchLinks, setSearchLinks] = useState<Link[]>([]);
  const [searchResult, setSearchResult] = useState<string>("");

  const handleFoldersLoad = async () => {
    const allLinksFolder: Folder = {
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
          created_at: "",
        },
      ],
    };
    const allData = await getAllLinksData();
    const { data } = await getFoldersData();
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
    handleFoldersLoad();
  }, [id]);

  return (
    <LocaleContext.Provider value={folderList}>
      <Banner />
      <section className={styles.contentFlex}>
        <div className={styles.contentBox}>
          <SearchInput
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            searchLink={searchLink}
          />
          <FolderButtonList
            setSelectFolderLinks={setSelectFolderLinks}
            setId={setId}
          />
          <FolderTitles searchResult={searchResult} id={id} />
          {searchResult !== "" ? (
            <CardList links={searchLinks} />
          ) : searchResult !== "" ? (
            <CardList links={searchLinks} />
          ) : id === 0 ? (
            <CardList links={folderList[0]?.links} />
          ) : selectFolderLinks.length !== 0 ? (
            <CardList links={selectFolderLinks} />
          ) : (
            <div className={styles.linksNull}>
              <div>저장된 링크가 없습니다.</div>
            </div>
          )}
        </div>
      </section>
      <FloatingButton />
    </LocaleContext.Provider>
  );
}

export default FolderPage;
