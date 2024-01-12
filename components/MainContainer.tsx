import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function MainContainer({ children }: Props) {
  return <StyledMainContainer>{children}</StyledMainContainer>;
}

const StyledMainContainer = styled.div`
  margin: 4rem auto;
  max-width: 106rem;
  min-height: 33rem;
  @media all and (max-width: 1124px) {
    margin: 4rem 3.2rem;
  }
`;

export default MainContainer;
