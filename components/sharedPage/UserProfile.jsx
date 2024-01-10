import styled from "styled-components";

function UserProfile({ folderData }) {
  return (
    <>
      {folderData && (
        <ProfileContainer>
          <UserProfileImg
            src={folderData.owner.profileImageSource}
            alt="프로필 이미지"
          />
          <UserName>{folderData.owner.name}</UserName>
          <BookMark>{folderData.name}</BookMark>
        </ProfileContainer>
      )}
    </>
  );
}

export default UserProfile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 24.4rem;
  background-color: #edf7ff;
`;

const UserProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
`;
const UserName = styled.p`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;

const BookMark = styled.p`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
