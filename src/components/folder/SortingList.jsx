import React from "react";
import styled from "styled-components";

import add from "../../images/add.svg";
import Sorting from "./Sorting";

function SortingList({ folders, setter, isClicked }) {
  return (
    <Wrapper>
      <Container>
        <Sorting
          key={0}
          id={0}
          name="전체"
          setter={setter}
          isClicked={isClicked}
        />
        {folders?.map((folder) => (
          <Sorting
            key={folder.id}
            id={folder.id}
            name={folder.name}
            setter={setter}
            isClicked={isClicked}
          />
        ))}
      </Container>
      <button>
        <Img src={add} alt="폴더 추가하기" />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 0.8rem;
  padding: 0;
`;

const Img = styled.img`
  display: none;
  width: 1.6rem;
  height: 1.6rem;

  @media (min-width: 768px) {
    display: block;
  }
`;

export default SortingList;
