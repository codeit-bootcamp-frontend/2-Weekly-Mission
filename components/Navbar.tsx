import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import Image from "next/image";

interface IUserData {
  id: number;
  image_source: string;
  email: string;
}

export default function Navbar() {
  const router = useRouter();
  const isSharedPath = router.pathname === "/shared";
  const [userData, setUserData] = useState<IUserData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/users/1");
        setUserData(res.data.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <StyledNavbarContainer $isActiveFixed={isSharedPath}>
        <StyledNavItem>
          <Link href="/">
            <Image width={130} height={24} src="/png/logo.png" alt="logo" />
          </Link>

          {userData?.id ? (
            <StyledNavProfile>
              <StyledNavProfileImg width={28} height={28} src={userData.image_source} alt="profile-img" />
              <StyledNavProfileEmail>{userData.email}</StyledNavProfileEmail>
            </StyledNavProfile>
          ) : (
            <StyledNavLoginBtn>로그인</StyledNavLoginBtn>
          )}
        </StyledNavItem>
      </StyledNavbarContainer>
    </>
  );
}

const StyledNavbarContainer = styled.nav<{ $isActiveFixed: boolean }>`
  background-color: #f0f6ff;
  margin: 0 auto;
  position: ${({ $isActiveFixed }) => ($isActiveFixed ? "fixed" : "static")};
  width: 100%;
  top: 0;
  left: 50%;
  transform: ${({ $isActiveFixed }) => ($isActiveFixed ? "translate(-50%, 0);" : "none")};
  z-index: 99;
`;

const StyledNavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  margin: 0 auto;
  padding: 3.2rem 20rem;

  @media all and (min-width: 768px) and (max-width: 1124px) {
    max-width: 710px;
    padding: 3.2rem 3.2rem;
  }

  @media all and (max-width: 768px) {
    padding: 1.8rem 3.2rem;
  }
`;

const StyledNavProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StyledNavProfileImg = styled(Image)`
  border-radius: 50%;
`;

const StyledNavProfileEmail = styled.p`
  font-size: 14px;
`;

const StyledNavLoginBtn = styled.button`
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border: none;
  color: white;
  padding: 1.6rem 2rem;
  width: 12.8rem;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
`;
