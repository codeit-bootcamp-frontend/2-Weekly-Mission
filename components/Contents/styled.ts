import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
  max-width: 106rem;
  height: 100%;
  gap: 4rem;

  @media (max-width: 1124px) {
    padding: 0 32px;
  }
`;
