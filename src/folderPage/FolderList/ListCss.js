import { styled } from "styled-components";
//flex-direction: column;
export const ListUl = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: flex-start;
// gap: 12px;

// display: flex;
// align-items: flex-start;
// gap: 8px;

export const List = styled.li`
  list-style: none;
  margin: 0;
  border-radius: 5px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: #fff;
  padding: 8px 12px;

  align-items: center;

  &:hover {
    border: 1px solid var(--linkbrary-primary-color, #6d6afe);
    background: var(--linkbrary-primary-color, #6d6afe);
  }
`;
// width: 1060px;
export const ListContainer = styled.div`
  display: flex;

  margin: 0 auto;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`;
//   flex-direction: column;
