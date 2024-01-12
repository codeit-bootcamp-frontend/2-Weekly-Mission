import styled from "styled-components";
import defaultImage from "@/public/images/defaultImage.png";

const defaultImageUrl = defaultImage.src;

const ImageContainer = styled.div`
  position: relative;
  & svg {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

const Image = styled.div<{ $imageSource: string }>`
  width: 100%;
  min-height: 19.2rem;
  height: 19.2rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background-image: url(${(props) => props.$imageSource || defaultImageUrl});
  background-position: center;
  background-size: cover;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    min-height: 20rem;
    height: 20rem;
  }

  &:hover {
    background-size: 130%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.5rem;
  height: 32.7rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 34rem;
    height: 33.4rem;
  }
`;

const FlaverHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Flavor = styled.div`
  height: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  transition: background-color 0.3s ease-in-out;
`;

const Posted = styled.span`
  font-size: 1.3rem;
  color: var(--text-content-gray);
`;

const CreateAt = styled.span`
  font-size: 1.4rem;
  color: var(--text-content-black);
`;

const Description = styled.p`
  height: 4.9rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.6rem;
  line-height: 150%;
`;

export { ImageContainer, Container, Image, Flavor, FlaverHeader, Posted, CreateAt, Description };
