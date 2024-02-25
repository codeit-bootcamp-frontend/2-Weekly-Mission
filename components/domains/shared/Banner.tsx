import styled from "styled-components";
import Image from "next/image";

function Banner() {
  const router = useRouter();
  const { folderId }: ParsedUrlQuery = router.query;

  // folderInfo 쿼리 실행
  const { data: folderInfo } = useQuery({
    queryKey: ["folderInfo", folderId],
    queryFn: async () => {
      const response = await getFolderData(folderId as string);
      return response[0];
    },
    enabled: !!folderId,
    staleTime: Infinity
  });

  // userInfo 쿼리 실행
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
    <BannerLayout>
      <BannerBox>
        <Image
          width={60}
          height={60}
          src={userInfo?.image_source}
          alt="배너 프로필 이미지"
        />
        <BannerText>{userInfo?.name}</BannerText>
        <BannerTitle>{folderInfo[0]?.name}</BannerTitle>
      </BannerBox>
    </BannerLayout>
  );
}

const BannerLayout = styled.section`
  background-color: var(--gray-bg-color);
  padding: 2rem 0 6rem;
`;
const BannerBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21rem;
  height: 16.4rem;
  gap: 2rem;
  margin: 0 auto;
`;

const BannerText = styled.div`
  font-size: 1.6rem;
`;
const BannerTitle = styled.h1`
  font-size: 4rem;
`;

export default Banner;
