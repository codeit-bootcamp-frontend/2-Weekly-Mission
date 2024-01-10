import styled from "styled-components";

import COLOR_TOKEN from "../../styles/colors";
import searchIcon from "../../images/search.svg";
import close from "../../images/close.svg";

function Search() {
  return (
    <Wrapper>
      <Container>
        <SearchIcon src={searchIcon} alt="돋보기 아이콘" />
        <Input placeholder="링크를 검색해 보세요." />
      </Container>
      <SearchErase src={close} alt="검색창 비우기 버튼" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1.3rem 1.6rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  background: ${COLOR_TOKEN.grayLight};

  @media (min-width: 768px) {
    padding: 1.5rem 1.6rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 0.6rem;
`;

const SearchIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const Input = styled.input`
  width: 100%;
  background: ${COLOR_TOKEN.grayLight};
  border: none;
  color: ${COLOR_TOKEN.text};
  text-align: left;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

const SearchErase = styled.img`
  display: none;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 1.2rem;
  text-align: center;
`;

export default Search;
