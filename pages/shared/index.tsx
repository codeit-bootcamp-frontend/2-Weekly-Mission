import React, { useEffect, useState } from "react";
import Banner from "../../components/domains/shared/Banner";
import CardList from "../../components/commons/CardList";
import styled from "styled-components";
import Image from "next/image";
import SearchInput from "../../components/commons/SearchInput";
import styles from "../../styles/sharedPage.module.css";
import { getAllLinksData, getUserData } from "../api/SharedApi";
import { SharedPageData } from "../../types/common";
import { Link } from "../../types/common";
import { SharedDataContext } from "../../contexts/LocaleContext";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
function SharedPage() {
  const router = useRouter();
  const { folderId }: ParsedUrlQuery = router.query;
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [pageData, setPageData] = useState<SharedPageData>({
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

  const sharedPageData = async () => {
    const { folder } = await getUserData();
    setPageData(folder);
    console.log();
    const linksData = await getAllLinksData();
    setPageData({
      ...pageData,
      links: linksData.links
    });
  };

  const searchLink = async (keyword: string) => {
    const { folder } = await getAllLinksData();
    const filteredLinks = folder.links.filter(
      (link: Link) =>
        link.url?.includes(keyword) ||
        link.title?.includes(keyword) ||
        link.description?.includes(keyword)
    );

    setPageData({
      ...folder,
      links: filteredLinks
    });
  };

  useEffect(() => {
    sharedPageData();
  }, [folderId]);

  return (
    <SharedDataContext.Provider value={pageData}>
      <Banner>
        <Image
          width={60}
          height={60}
          src={pageData?.owner?.profileImageSource}
          alt="배너 프로필 이미지"
        />
        <BannerText>{pageData?.name}</BannerText>
        <BannerTitle>{pageData?.name}</BannerTitle>
      </Banner>
      <section className={styles.contentFlex}>
        <div className={styles.contentBox}>
          <SearchInput
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            onSearch={searchLink}
          />
          <CardList links={pageData?.links} />
        </div>
      </section>
    </SharedDataContext.Provider>
  );
}
const BannerText = styled.div`
  font-size: 1.6rem;
`;
const BannerTitle = styled.h1`
  font-size: 4rem;
`;

export default SharedPage;
