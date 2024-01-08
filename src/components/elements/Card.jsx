import styled from "styled-components";
import emptyLogo from "../../images/card-logo.svg";
import kebab from "../../images/kebab.svg";
import { formatDate, timeAgo } from "../../utils/formatDate";
import COLOR_TOKEN from "../../styles/colors";

function Card({ link, handleCardClick }) {
  const { createdAt, url, description, imageSource } = link;
  const onClick = () => handleCardClick(url);

  return (
    <Container>
      <ImageSection onClick={onClick}>
        {imageSource ? (
          <CardImage src={imageSource} alt="카드 이미지" />
        ) : (
          <EmptyCardImage src={emptyLogo} alt="빈 카드 이미지" />
        )}
      </ImageSection>
      <InfoSection>
        <TimeAgoSection>
          <span>{timeAgo(createdAt)}</span>
          <Kebab src={kebab} alt="더보기 메뉴" />
        </TimeAgoSection>
        <Description>{description}</Description>
        <span>{formatDate(createdAt)}</span>
      </InfoSection>
    </Container>
  );
}

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  transition-duration: 0.2s;
`;

const EmptyCardImage = styled(CardImage)`
  border-radius: 0;
  width: 13.3rem;
  height: 2.4rem;
  flex-shrink: 0;
`;

const InfoSection = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 0rem 0rem 1.5rem 1.5rem;
  background: #fff;
  height: 13.4rem;
`;

const Kebab = styled.img`
  display: none;
  width: 2.1rem;
  height: 1.7rem;

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 32.5rem;
  height: 32.7rem;
  border-radius: 1.5rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    width: 34rem;
    height: 33.4rem;
  }

  &:hover {
    ${CardImage} {
      transition-duration: 0.2s;
      transform: scale(1.3);
    }

    ${InfoSection} {
      background: ${COLOR_TOKEN.background};
    }

    ${Kebab} {
      display: block;
    }
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dddfff;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-radius: 1.5rem 1.5rem 0rem 0rem;
  cursor: pointer;
`;

const TimeAgoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  font-size: 1.3rem;
  color: ${COLOR_TOKEN.text};
`;

const Description = styled.span`
  height: 4.9rem;
  align-self: stretch;
  overflow: hidden;
  color: #000;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;

export default Card;
