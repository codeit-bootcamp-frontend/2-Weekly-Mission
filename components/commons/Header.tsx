import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useAccessToken } from "../../hook/useAccessToken";
import { useContext } from "react";
import { DataContext } from "../../contexts/LocaleContext";

function Header() {
  const { userInfo } = useContext(DataContext);
  const { accessToken } = useAccessToken();
  console.log(userInfo);
  return (
    <HeaderLayout>
      <HeaderBox>
        <Link href="/shared">
          <Image
            width={133}
            height={24}
            src="/images/logo.png"
            alt="로고이미지"
          />
        </Link>
        {accessToken ? (
          <HeaderProfileBox>
            <Image
              width={28}
              height={28}
              src={userInfo?.image_source}
              alt="프로필 아이콘"
            />
            <div>{userInfo?.email}</div>
          </HeaderProfileBox>
        ) : (
          <HeaderLoginButton>로그인</HeaderLoginButton>
        )}
      </HeaderBox>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  background-color: var(--gray-bg-color);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2rem 20rem;

  @media (max-width: 1200px) {
    padding: 0 3.2rem;
    margin: 2rem 0;
    width: 79.9rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 3.2rem;
    margin: 2rem 0;
  }
`;

const HeaderProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  & div {
    font-size: 1.4rem;
  }
`;

const HeaderLoginButton = styled.a`
  padding: 1.6rem 4rem;
  background-image: linear-gradient(
    90deg,
    rgba(109, 106, 254, 1),
    rgba(106, 227, 254, 1)
  );
  border: none;
  border-radius: 0.8rem;
  color: var(--white-color);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.16rem;
  margin-bottom: 3.2rem;
  cursor: pointer;
`;

export default Header;
