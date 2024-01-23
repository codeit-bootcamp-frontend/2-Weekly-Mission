import React, { useEffect, useState } from "react";
import Banner from "../../../components/domains/shared/Banner";
import CardList from "../../../components/commons/CardList";
import SearchInput from "../../../components/commons/SearchInput";
import styles from "../../../styles/sharedPage.module.css";
import { getLinkData } from "../../api/PageApi";
import { Link } from "../../../types/common";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useContext } from "react";
import { DataContext } from "../../../contexts/LocaleContext";

function SharedPage() {
  const router = useRouter();
  const { folderId }: ParsedUrlQuery = router.query;
  const [linkInfo, setLinkInfo] = useState<Link[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const { userInfo } = useContext(DataContext);

  const handleLinksInfoLoad = async (userId: number, folderId: string) => {
    const { data } = await getLinkData(userId, folderId);
    console.log(data);
    setLinkInfo(data);
  };

  const searchLink = async (keyword: string) => {
    const filteredLinks = linkInfo?.filter(
      (link: Link) =>
        link.url?.includes(keyword) ||
        link.title?.includes(keyword) ||
        link.description?.includes(keyword)
    );

    setLinkInfo(filteredLinks);
  };

  useEffect(() => {
    handleLinksInfoLoad(userInfo.id, folderId);
  }, [folderId]);

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
          <CardList links={linkInfo} />
        </div>
      </section>
    </>
  );
}

export default SharedPage;
