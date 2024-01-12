import styled from "styled-components";

const NoLinks = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export { NoLinks, ErrorMessage };
