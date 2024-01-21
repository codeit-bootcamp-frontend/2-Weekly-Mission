import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
import { SharedPageData } from "../../../types/common";
import { SharedDataContext } from "../../../contexts/LocaleContext";

function Banner({ children }: { children: ReactNode }) {
  const sharedData = useContext(SharedDataContext);
  return (
    <BannerLayout>
      <BannerBox>{children}</BannerBox>
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

export default Banner;
