import styled from "styled-components";

interface InfoProps {
  $isInterSecting?: boolean;
}

const Wrapper = styled.header<InfoProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 14rem;
  background-color: #edf7ff;

  gap: 1.2rem;
  padding: 20px 0;
`;

const FolderInputContainer = styled.div<InfoProps>`
  position: ${({ $isInterSecting }) => ($isInterSecting ? "static" : "fixed")};
  bottom: ${({ $isInterSecting }) => ($isInterSecting ? "auto" : "0")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 10rem;
  background-color: #edf7ff;

  z-index: 1;
`;

export { Wrapper, FolderInputContainer };
