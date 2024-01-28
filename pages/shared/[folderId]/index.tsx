import React, { useEffect, useState } from "react";
import Banner from "../../../components/domains/shared/Banner";
import CardList from "../../../components/commons/CardList";
import SearchInput from "../../../components/commons/SearchInput";
import styles from "../../../styles/sharedPage.module.css";
import { Link } from "../../../types/common";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useContext } from "react";
import { DataContext } from "../../../contexts/LocaleContext";

function SharedPage() {
  const router = useRouter();
  const { folderId }: ParsedUrlQuery = router.query;
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const { sharedLinkInfo, setSharedLinkInfo } = useContext(DataContext);

  const searchLink = async (keyword: string) => {
    const filteredLinks = sharedLinkInfo?.filter(
      (link: Link) =>
        link.url?.includes(keyword) ||
        link.title?.includes(keyword) ||
        link.description?.includes(keyword)
    );

    setSharedLinkInfo(filteredLinks);
  };

  useEffect(() => {}, [folderId]);

  return (
    <>
      <Banner />
      <section className={styles.contentFlex}>
        <div className={styles.contentBox}>
          <SearchInput
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            onSearch={searchLink}
          />
          <CardList links={sharedLinkInfo} />
        </div>
      </section>
    </>
  );
}

export default SharedPage;
