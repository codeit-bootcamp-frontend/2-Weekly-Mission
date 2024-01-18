import styled from "styled-components";
import COLOR_TOKEN from "../../styles/colors";
import UserProfile from "./UserProfile";
import AddLink from "../folder/AddLink";

function Header({
  userFolderProfileImgSrc = "/",
  folderOwnerName = "",
  userFolderName = "",
}) {
  return (
    <>
      {userFolderName !== "" ? (
        <UserProfileWrapper>
          <userProfileContainer>
            <UserProfile
              userFolderProfileImgSrc={userFolderProfileImgSrc}
              folderOwnerName={folderOwnerName}
            />
            <FolderName>{userFolderName}</FolderName>
          </userProfileContainer>
        </UserProfileWrapper>
      ) : (
        <AddLinkWrapper>
          <AddLink />
        </AddLinkWrapper>
      )}
    </>
  );
}

const UserProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6.3rem;
  padding-top: 1rem;
  padding-bottom: 4rem;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background: ${COLOR_TOKEN.background};

  @media (min-width: 768px) {
    margin-top: 9.4rem;
    padding-top: 2rem;
    padding-bottom: 6rem;
    gap: 0.8rem;
  }
`;

const userProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const AddLinkWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2.4rem 3.2rem 4rem 3.2rem;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  background: ${COLOR_TOKEN.background};
`;

const FolderName = styled.div`
  color: ${COLOR_TOKEN.black};
  text-align: center;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (min-width: 768px) {
    font-feature-settings: "clig" off, "liga" off;
    font-size: 4rem;
  }
`;

export default Header;
