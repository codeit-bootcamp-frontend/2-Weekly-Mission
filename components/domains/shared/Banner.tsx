import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
import { SharedPageData } from "../../../types/common";
import { LocaleContext } from "../../../contexts/LocaleContext";

function Banner() {
  const locale = useContext<SharedPageData>(LocaleContext);
  return (
    <BannerLayout>
      <BannerBox>
        <Image width={60} height={60} src={locale.owner.profileImageSource} alt="배너 프로필 이미지" />
        <BannerText>{locale.owner.name}</BannerText>
        <BannerTitle>{locale.name}</BannerTitle>
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
