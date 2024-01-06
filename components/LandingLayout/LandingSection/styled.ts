import styled from "styled-components";

interface SectionType {
  odd?: boolean;
}

const StyledSection = styled.section<SectionType>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;
  row-gap: 1.6rem;
  width: 100%;
  height: fit-content;
  padding: 4rem 3.2rem;

  @media (min-width: 768px) {
    height: 41.5rem;
    column-gap: 5.1rem;
    row-gap: 1rem;
    padding: 5rem 0;
  }

  @media (min-width: 1200px) {
    height: 55rem;
    column-gap: 15.7rem;
  }
  grid-template-areas:
    "title"
    "image"
    "description";

  @media (min-width: 768px) {
    grid-template-columns: ${(props) => (props.odd ? "26.2rem 38.5rem" : "38.5rem 26.2rem")};
    grid-template-areas: ${(props) =>
      props.odd
        ? "'. image' 'title image' 'description image' '. image'"
        : "'image .' 'image title' 'image description' 'image .'"};
    padding: 5rem 0;
  }

  @media (min-width: 1200px) {
    grid-template-columns: ${(props) => (props.odd ? "29.1rem 55rem" : "55rem 29.1rem")};
  }
`;

const Title = styled.h2`
  grid-area: title;
  font-weight: 700;
  letter-spacing: -0.03rem;
  font-size: 2.4rem;

  @media (min-width: 768px) {
    font-size: 4.8rem;
    line-height: 5.8rem;
  }
`;

const TitleGradient = styled.span<{ gradient: string }>`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: ${({ gradient }) => gradient};
`;

const Description = styled.p`
  grid-area: description;
  font-size: 1.5rem;
  font-weight: 500;
  color: #6b6b6b;
  line-height: 150%;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  grid-area: image;
  width: 100%;
  height: 100%;
  min-height: 20rem;

  & > span {
    position: unset !important;
  }

  img {
    object-fit: cover;
  }

  @media (min-width: 768px) {
    min-height: 31.5rem;
  }

  @media (min-width: 1200px) {
    min-height: 45rem;
  }
`;

export { Description, ImageContainer, StyledSection, Title, TitleGradient };
