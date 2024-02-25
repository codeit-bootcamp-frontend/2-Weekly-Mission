import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getFolderData, getOwnerData } from "../../../pages/api/SharedApi";

function Header() {
  const router = useRouter();
  const { folderId }: ParsedUrlQuery = router.query;

  const { data: folderInfo } = useQuery({
    queryKey: ["folderInfo", folderId],
    queryFn: async () => {
      const response = await getFolderData(folderId as string);
      return response[0];
    },
    enabled: !!folderId,
    staleTime: Infinity
  });

  const { data: userInfo } = useQuery({
    queryKey: ["userInfo", folderInfo?.user_id],
    queryFn: async () => {
      const response = await getOwnerData(folderInfo?.user_id);
      return response[0];
    },
    enabled: !!folderId && !!folderInfo,
    staleTime: Infinity
  });

  console.log(folderInfo, userInfo);

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
        {userInfo ? (
          <HeaderProfileBox>
            <Image
              width={28}
              height={28}
              src={userInfo.image_source}
              alt="프로필 아이콘"
            />
            <div>{userInfo.email}</div>
          </HeaderProfileBox>
        ) : (
          <HeaderLoginButton>로그인</HeaderLoginButton>
        )}
      </HeaderBox>
    </HeaderLayout>
  );
}
import { UserInfo } from "../../types/common";

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
