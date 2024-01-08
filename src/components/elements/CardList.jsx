import React from "react";
import Card from "./Card";
import styled from "styled-components";

function CardList({ folderLinks }) {
  function handleCardClick(url) {
    window.open(url, "_blank");
  }

  return (
    <Container>
      {folderLinks.map((link) => (
        <li key={link.id}>
          <Card link={link} handleCardClick={handleCardClick} />
        </li>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  align-items: flex-start;
  width: 100%;
  list-style-type: none;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 2.5rem 2.4rem;
  }

  @media (min-width: 1124px) {
    column-gap: 2rem;
  }
`;

export default CardList;
