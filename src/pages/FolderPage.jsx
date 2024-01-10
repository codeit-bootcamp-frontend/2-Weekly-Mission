import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getUserFolders, getUserLinks, getUserProfile } from "../api/api";
import useAsync from "../hooks/useAsync";
import COLOR_TOKEN from "../styles/colors";
import GNB from "../components/Navbar/GNB";
import Header from "../components/Header/Header";
import Search from "../components/elements/Search";
import CardList from "../components/elements/CardList";
import Footer from "../components/Footer/Footer";
import SortingList from "../components/folder/SortingList";
import FolderSettings from "../components/folder/FolderSettings";
import FAB from "../components/folder/FAB";
import { formatData } from "../utils/formatData";

function FolderPage() {
  const [isLinksLoading, isLinksError, getUserLinksAsync] =
    useAsync(getUserLinks);
  const [isFoldersLoading, isFoldersError, getUserFoldersAsync] =
    useAsync(getUserFolders);
  const [isProfileLoading, isProfileError, getUserProfileAsync] =
    useAsync(getUserProfile);
  const [links, setLinks] = useState();
  const [folders, setFolders] = useState();
  const [folderInfo, setFolderInfo] = useState({ id: 0, name: "전체" });
  const [userId, setUserId] = useState(1);
  const [userProfile, setUserProfile] = useState();
  const [isClicked, setIsClicked] = useState(0);

  const setter = (UserID, FolderID, FolderName, IsClicked) => {
    setUserId(UserID);
    setFolderInfo((prev) => {
      const newInfo = { ...prev, id: FolderID, name: FolderName };
      return newInfo;
    });
    setIsClicked(IsClicked);
  };

  useEffect(() => {
    const getLinksData = async () => {
      const res = await getUserLinksAsync(userId, folderInfo.id);
      const { data } = res;
      const camelData = data?.map((prev) => formatData(prev));
      setLinks(camelData);
    };

    const getFoldersData = async () => {
      const res = await getUserFoldersAsync(userId);
      const { data } = res;
      setFolders(data);
    };

    const getUserData = async () => {
      const res = await getUserProfileAsync(userId);
      const { data } = res;
      const camelData = formatData(data[0]);
      setUserProfile(camelData);
    };

    getUserData();
    getLinksData();
    getFoldersData();
  }, [userId, folderInfo]);

  return (
    <PageContainer>
      <Top>
        <GNB
          location="folder"
          isSignin={true}
          userName={userProfile?.name}
          userProfileImgSrc={userProfile?.imageSource}
        />
        <Header />
        <ContentContainer>
          <Search />
          <SortingContainer>
            <SortingList
              folders={folders}
              setter={setter}
              isClicked={isClicked}
            />
            <FolderContainer>
              <FolderBox>
                <FolderName>{folderInfo?.name}</FolderName>
                {folderInfo?.id === 0 ? null : <FolderSettings />}
              </FolderBox>
              {links?.length ? (
                <CardContainer>
                  <CardList location="folder" folderLinks={links} />
                </CardContainer>
              ) : (
                <NoLink>저장된 링크가 없습니다.</NoLink>
              )}
            </FolderContainer>
          </SortingContainer>
          <FAB />
        </ContentContainer>
      </Top>
      <Footer />
    </PageContainer>
  );
}

const NoLink = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  justify-content: center;
  align-items: center;
  color: ${COLOR_TOKEN.black};
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 150%;
  }
`;

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 32.5rem;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    width: 70.4rem;
  }

  @media (min-width: 1124px) {
    width: 106rem;
  }
`;

const SortingContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.8rem;
`;

const FolderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const FolderBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const FolderName = styled.div`
  color: ${COLOR_TOKEN.black};
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.02rem;
`;

const CardContainer = styled.div`
  display: flex;
  width: 32.5rem;

  @media (min-width: 768px) {
    width: 70.4rem;
  }

  @media (min-width: 1124px) {
    width: 106rem;
  }
`;

export default FolderPage;
