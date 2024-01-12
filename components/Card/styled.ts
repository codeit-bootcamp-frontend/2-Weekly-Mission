import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(32.5rem);
  justify-content: center;
  width: 100%;
  max-width: 106rem;
  row-gap: 2rem;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    grid-template-columns: repeat(auto-fill, 34rem);
    row-gap: 2.5rem;
    column-gap: 2rem;
  }
`;

export { Wrapper };
