import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { timeAgo, formatDate } from "../../utils/time";
import Kebab from "./Kebab";

function Card({ cardData }) {
  const [selectedKebab, setSelectedKebab] = useState(new Set());

  const handleKebabClick = (id) => {
    setSelectedKebab((prevSelectedKebab) => {
      const newSelectedKebab = new Set(prevSelectedKebab);
      if (newSelectedKebab.has(id)) {
        newSelectedKebab.delete(id);
      } else {
        newSelectedKebab.add(id);
      }
      return newSelectedKebab;
    });
  };

  const handleClickOutside = (e) => {};

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <CardGrid>
        {cardData &&
          cardData.data.map((data) => (
            <CardContents key={data.id}>
              <Link href={data.url}>
                <CardContainer>
                  <StarButton>
                    <Image
                      src="/star.svg"
                      alt="별 이미지"
                      width={34}
                      height={34}
                    />
                  </StarButton>
                  <CardImg
                    src={data.imageSource || data.image_source || "/none.svg"}
                    key={data.id}
                    alt="이미지 미리보기"
                    width={100}
                    height={100}
                  />
                </CardContainer>
              </Link>
              <CardInfoContainer>
                <KebabButton onClick={() => handleKebabClick(data.id)}>
                  <Image
                    src="/kebab.svg"
                    alt="케밥 이미지"
                    width={21}
                    height={17}
                  />
                </KebabButton>
                {selectedKebab.has(data.id) && <Kebab />}
                <CreatedAt>{timeAgo(data.createdAt ? data.createdAt : data.created_at)}</CreatedAt>
                <Description>
                  {data.description || "no description"}
                </Description>
                <MakeDate>{formatDate(data.createdAt ? data.createdAt : data.created_at)}</MakeDate>
              </CardInfoContainer>
            </CardContents>
          ))}
      </CardGrid>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  max-width: 106rem;
  margin: 4rem auto;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem 2rem;
  margin: 4rem 0;
`;

const CardContents = styled.div`
  width: 34rem;
  height: 33rem;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 0.2rem solid rgba(0, 0, 0, 0);
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);

  &:hover {
    border: 0.2rem solid #6d6afe;
  }
`;

const CardContainer = styled.div`
  height: 60%;
  overflow: hidden;
  position: relative;
`;

const StarButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
`;

const CardImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.3);
    transition: all 0.8s ease-out;
  }
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 40%;
  padding: 1.5rem 2rem;
  gap: 1rem;
`;

const KebabButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 0.8rem;
`;

const CreatedAt = styled.p`
  color: #666;
  font-size: 1.3rem;
  font-weight: 400;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const MakeDate = styled.p`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.4rem;
  font-weight: 400;
`;
