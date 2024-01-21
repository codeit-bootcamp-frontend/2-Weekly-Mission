import React, { useEffect, useState } from "react";
import Banner from "../../../components/domains/shared/Banner";
import CardList from "../../../components/commons/CardList";
import SearchInput from "../../../components/commons/SearchInput";
import styles from "../../../styles/sharedPage.module.css";
import { getFolderData, getOwnerData, getLinkData } from "../../api/SharedApi";
import { Link } from "../../../types/common";
import { SharedDataContext } from "../../../contexts/LocaleContext";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
function SharedPage() {
  const router = useRouter();
  const { folderId }: ParsedUrlQuery = router.query;
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [sharedData, setSharedData] = useState<{
    folder?: any;
    user?: any;
    links?: Link[];
  }>({
    folder: {},
    user: {},
    links: []
  });

  const sharedPageData = async () => {
    try {
      if (folderId) {
        // Fetch folder data
        const { data: folder } = await getFolderData(folderId as string);
        const ownerResponse = await getOwnerData(folder[0].user_id as string);
        const linkResponse = await getLinkData(
          ownerResponse.data[0].id,
          folder[0].user_id
        );
        setSharedData({
          folder: folder[0],
          user: ownerResponse.data[0],
          links: linkResponse.data
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const searchLink = async (keyword: string) => {
    const filteredLinks = sharedData.links?.filter(
      (link: Link) =>
        link.url?.includes(keyword) ||
        link.title?.includes(keyword) ||
        link.description?.includes(keyword)
    );

    setSharedData({
      ...sharedData,
      links: filteredLinks
    });
  };

  useEffect(() => {
    sharedPageData();
  }, [folderId]);

  return (
    <SharedDataContext.Provider value={sharedData}>
      <Banner />
      <section className={styles.contentFlex}>
        <div className={styles.contentBox}>
          <SearchInput
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            onSearch={searchLink}
          />
          <CardList links={sharedData.links} />
        </div>
      </section>
    </SharedDataContext.Provider>
  );
}

export default SharedPage;
