import React from "react";
import styled from "styled-components";

function UserProfile({ userFolderProfileImgSrc, folderOwnerName }) {
  return (
    <Container>
      <Img src={userFolderProfileImgSrc} alt="폴더 소유자 프로필 이미지" />
      <span>@{folderOwnerName}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

const Img = styled.img`
  width: 4rem;
  height: 4rem;

  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;

export default UserProfile;
