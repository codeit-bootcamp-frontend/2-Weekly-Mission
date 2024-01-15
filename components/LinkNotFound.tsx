import styled from "styled-components";

export default function LinkNotFound() {
  return <LinkNotFoundMsg>저장된 링크가 없습니다.</LinkNotFoundMsg>;
}

const LinkNotFoundMsg = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.6rem;
`;
