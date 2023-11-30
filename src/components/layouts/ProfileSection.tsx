import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopBar from '../molecules/TopBar';
import { User } from '../../utils/interfaces';

const Container = styled.div`
  width: 100%;
  height: 33.7rem;
  background-color: ${({ theme }) => theme.colors.skyblue};
`;

const ContentsWrapper = styled.div`
  width: fit-content;
  margin: 2rem auto 0;
`;

const UserWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ImgWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 70%;
  overflow: hidden;
  margin: 0 auto 1.2rem;
`;

const UserProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserName = styled.div`
  font-family: 'Pretendard';
  font-size: 1.6rem;
`;

const FolderName = styled.div`
  font-family: 'Pretendard';
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
`;

function ProfileSection() {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    try {
      const res = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser().then((data) => {
      setUser(data);
    });
  }, []);
  // console.log(user);

  return (
    <Container>
      <TopBar email={user?.email} profileImageSource={user?.profileImageSource} />
      <ContentsWrapper>
        <UserWrapper>
          <ImgWrapper>
            <UserProfileImg src={user?.profileImageSource} alt='profile-img' />
          </ImgWrapper>
          <UserName>{user?.name}</UserName>
        </UserWrapper>
        <FolderName>⭐️ 즐겨찾기</FolderName>
      </ContentsWrapper>
    </Container>
  );
}

export default ProfileSection;
