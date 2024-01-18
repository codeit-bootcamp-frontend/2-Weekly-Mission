import React, { useEffect, useState } from "react";
import Banner from "../components/domains/shared/Banner";
import CardList from "../components/commons/CardList";
import SearchInput from "../components/commons/SearchInput";
import styles from "../styles/sharedPage.module.css";
import { getSharedFolderData } from "./api/SharedApi";
import { SharedPageData } from "../types/common";
import { Link } from "../types/common";
import { DataContext } from "../contexts/LocaleContext";

function SharedPage() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [sharedFolder, setSharedFolder] = useState<SharedPageData>({
    id: 1,
    name: "",
    owner: {
      id: 2,
      name: "",
      profileImageSource: ""
    },
    links: [
      {
        id: 1,
        url: "",
        title: "",
        description: "",
        image_source: "",
        created_at: ""
      }
    ]
  });

  const handleFolderLoad = async () => {
    const { folder } = await getSharedFolderData();
    setSharedFolder(folder);
  };

  const searchLink = async (keyword: string) => {
    const { folder } = await getSharedFolderData();
    const filteredLinks = folder.links.filter(
      (link: Link) =>
        link.url?.includes(keyword) ||
        link.title?.includes(keyword) ||
        link.description?.includes(keyword)
    );

    setSharedFolder({
      ...folder,
      links: filteredLinks
    });
  };

  useEffect(() => {
    handleFolderLoad();
  }, []);

  return (
    <DataContext.Provider value={sharedFolder}>
      <Banner />
      <section className={styles.contentFlex}>
        <div className={styles.contentBox}>
          <SearchInput
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            onSearch={searchLink}
          />
          <CardList links={sharedFolder?.links} />
        </div>
      </section>
    </DataContext.Provider>
  );
}

export default SharedPage;
