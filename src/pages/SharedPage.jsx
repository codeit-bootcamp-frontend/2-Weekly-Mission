import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GNB from "../components/Navbar/GNB";
import { getSampleFolder, getSampleUserProfile } from "../api/api";
import useAsync from "../hooks/useAsync";
import Header from "../components/Header/Header";
import Search from "../components/elements/Search";
import CardList from "../components/elements/CardList";
import Footer from "../components/Footer/Footer";

function SharedPage() {
  const [isUserLoading, isUserError, getUserProfileAsync] =
    useAsync(getSampleUserProfile);
  const [isFolderLoading, isFolderError, getFolderAsync] =
    useAsync(getSampleFolder);
  const [isSignin, setIsSignin] = useState("false");
  const [userData, setUserData] = useState();
  const [folderData, setFolderData] = useState({});

  useEffect(() => {
    const getUserProfileData = async () => {
      const data = await getUserProfileAsync();
      setUserData(data);
    };

    const getFolderData = async () => {
      const data = await getFolderAsync();
      const { folder } = data;
      setFolderData(folder);
    };
    getUserProfileData();
    getFolderData();
  }, []);

  if (!userData) return null;

  return (
    <PageContainer>
      <GNB
        isSignin={isSignin}
        userName={userData.name}
        userProfileImgSrc={userData.profileImageSource}
      />
      <Header
        userFolderName={folderData.name}
        folderOwnerName={folderData.owner.name}
        userFolderProfileImgSrc={folderData.owner.profileImageSource}
      />
      <ContentContainer>
        <Search />
        <CardContainer>
          <CardList folderLinks={folderData.links} />
        </CardContainer>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  width: calc(100% - 3.2rem);
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (min-width: 1124px) {
    width: 106rem;
  }
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

export default SharedPage;
