import { styled } from "styled-components";

export const P = styled.p`
  margin: 0;
  color: black;
`;
export const Title = styled.h1`
  margin: 0;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const Lis = styled.li`
  border-radius: 0 0 15px 15px;
  list-style-type: none;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  width: 340px;
`;

export const ATag = styled.a`
  text-decoration: none;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 253.746px;
  flex-shrink: 0;
  border-radius: 15px 15px 0 0;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.3);
  }
`;
export const HiddenImg = styled.div`
  overflow: hidden;
  border-radius: 15px 15px 0 0;
  position: relative;
`;

export const FavoritesImg = styled.img`
  position: absolute;
  right: 20px;
  top: 15px;
`;

export const TextLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 15px 20px;
  position: relative;
`;

export const TimeDiff = styled.p`
  color: #666;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ButtonImg = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardDescripTag = styled.p`
  height: 49px;
  align-self: stretch;
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  word-wrap: break-word;
`;

export const cardDateTag = styled.p`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HhhDiv = styled.div`
  display: grid;

  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  position: absolute;
  bottom: 70px;
  left: 299px;
  gap: 4px;
`;

export const ToggleOption = styled.p`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;
