import styled from "styled-components";
import Image from "next/image";
import CalculateElapsedTime from "../../utils/calculateElapsedTime";
import ConvertToFormattedDate from "../../utils/convertToFormattedDate";
import { Link } from "../../types/commons";

function Card({ link }: { link: Link }) {
  const elapseTime = CalculateElapsedTime(link?.create_at || "");
  const postedDate = ConvertToFormattedDate(link?.create_at || "");

  return (
    <CardLayout>
      <CardImageWrapper onClick={() => window.open(`${link.url}`, "_blank")}>
        {link && link.image_source ? (
          <CardImage src={link.image_source} alt="카드 이미지" fill />
        ) : (
          <CardNoImage
            src="/images/noImage.svg"
            alt="카드 이미지 비활성화"
            fill
          />
        )}
      </CardImageWrapper>
      <CardDescriptionBox>
        <TimeBox>
          <div>{elapseTime}</div>
          <Image
            src="/images/meatball.png"
            alt="팝오버 메뉴아이콘"
            width={21}
            height={17}
          />
        </TimeBox>
        <p>{link && link.description}</p>
        <div>{postedDate}</div>
      </CardDescriptionBox>
    </CardLayout>
  );
}

const CardLayout = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CardImageWrapper = styled.div`
  width: 34rem;
  height: 33.4rem;
  position: relative;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const CardImage = styled(Image)`
  width: 34rem;
  height: 33.4rem;
  object-fit: cover;

  &:hover {
    transform: scale(1.3);
  }
`;

const CardNoImage = styled(Image)`
  object-fit: cover;
  width: 100%;
`;
const CardDescriptionBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 2rem 1.5rem;
  position: absolute;
  top: 20rem;
  z-index: 1;

  & p {
    width: 30rem;
    font-size: 1.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    margin-bottom: 1rem;
  }
  & div {
    font-size: 1.4rem;
  }
`;

const TimeBox = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    font-size: 1.3rem;
    color: rgba(102, 102, 102, 1);
    margin-bottom: 1rem;
  }

  & img {
    width: 2.1rem;
    height: 1.7rem;
  }
`;

export default Card;
