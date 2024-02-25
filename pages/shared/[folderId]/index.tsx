import React, { useEffect, useState } from "react";
import Banner from "../../../components/domains/shared/Banner";
import CardList from "../../../components/commons/CardList";
import SearchInput from "../../../components/commons/SearchInput";
import styles from "../../../styles/sharedPage.module.css";
import { Link } from "../../../types/common";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { getLinkData } from "../../api/SharedApi";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

function SharedPage() {
  const router = useRouter();
  const { folderId }: ParsedUrlQuery = router.query;
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [searchData, setSearchData] = useState();

  const { data: linkList, isLoading } = useQuery({
    queryKey: ["linkList", folderId],
    queryFn: async () => {
      const response = await getLinkData(folderId);
      return response;
    },
    enabled: !!folderId,
    staleTime: Infinity
  });

  console.log(linkList);

  const searchLink = async (keyword: string) => {
    const filteredLinks = linkList?.filter(
      (link: Link) =>
        link.url?.includes(keyword) ||
        link.title?.includes(keyword) ||
        link.description?.includes(keyword)
    );

    setSearchData(filteredLinks);
  };

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
          {linkList?.length === 0 ? (
            <NoFoundLink>
              <div>저장된 링크가 없습니다</div>
            </NoFoundLink>
          ) : (
            <CardList links={searchKeyword === "" ? linkList : searchData} />
          )}
        </div>
      </section>
    </>
  );
}

const NoFoundLink = styled.div`
  width: 100%;
  height: 10rem;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default SharedPage;
