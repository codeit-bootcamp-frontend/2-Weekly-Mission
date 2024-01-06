import styled from "styled-components";

interface SearchBarIcon {
  left?: string;
  right?: string;
  $isClose?: boolean;
  $iconType: "search" | "close";
}

const StyledIcon = styled.svg<SearchBarIcon>`
  position: absolute;
  top: 50%;
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  transform: translateY(-50%);

  display: ${({ $iconType, $isClose }) => ($iconType === "close" && !$isClose ? "none" : "block")};
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputBar = styled.input`
  width: 100%;
  padding-left: 4rem;
  border-radius: 1rem;
  background: #f5f5f5;
  height: 5.4rem;
  border: none;
`;

const SearchResult = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.gray600};
`;

const SearchKeyword = styled.span`
  color: #373740;
`;

export { StyledIcon, InputBar, InputContainer, SearchKeyword, SearchResult };
