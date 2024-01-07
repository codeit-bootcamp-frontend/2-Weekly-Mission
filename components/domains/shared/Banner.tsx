import styled from "styled-components";
import { Folder } from "../../../types/shared";

function Banner({ folder }: { folder: Folder }) {
  return (
    <BannerLayout>
      <BannerBox>
        <BannerImage
          src={folder.owner.profileImageSource}
          alt="배너 프로필 이미지"
        />
        <BannerText>{folder.owner.name}</BannerText>
        <BannerTitle>{folder.name}</BannerTitle>
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
const BannerImage = styled.img`
  width: 6rem;
`;
const BannerText = styled.div`
  font-size: 1.6rem;
`;
const BannerTitle = styled.h1`
  font-size: 4rem;
`;

export default Banner;
