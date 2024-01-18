import Image from "next/image";
import styled, { keyframes } from "styled-components";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #edf7ff;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.4rem;
  padding: 2.8rem 3.2rem 0;

  @media (min-width: 768px) {
    padding: 3.9rem 0 0;
    row-gap: 4rem;
  }

  @media (min-width: 1200px) {
    padding: 7rem 0 0;
  }
`;

const Slogan = styled.h1`
  width: 24rem;
  text-align: center;
  font-size: 3.2rem;
  line-height: 131.25%;
  font-weight: 700;

  @media (min-width: 768px) {
    width: 48rem;
    font-size: 6.4rem;
    line-height: 125%;
  }

  @media (min-width: 1200px) {
    width: 80rem;
  }

  span {
    background-image: linear-gradient(119deg, ${({ theme }) => theme.primary} 0%, #ff9f9f 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const CutLine = styled.div`
  height: 3rem;
  border: 0.1rem solid var(--White);
`;

const fadein = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: fit-content;
  @media (min-width: 768px) {
    width: 69.8rem;
    height: 34.3rem;
  }

  @media (min-width: 1200px) {
    width: 120rem;
    height: 59rem;
  }
`;

export { Container, Header, Slogan, CutLine, fadein, StyledImage };
