import styled from "styled-components";
import Image from "next/image";

function Search() {
  return (
    <Container>
      <LinkSearch type="text" placeholder="링크를 검색해보세요." />
      <ImgContainer>
        <Image fill src="/search.svg" alt="돋보기 아이콘" />
      </ImgContainer>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  max-width: 106rem;
  margin: 4rem auto;
  position: relative;
`;

const LinkSearch = styled.input`
  width: 100%;
  padding: 1.5rem 1.6rem 1.5rem 4rem;
  border-radius: 1rem;
  background: #f5f5f5;
  border: none;
`;

const ImgContainer = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
`;