import styled from "styled-components";
import SearchIcon from "../../public/search.svg";

function Search() {
  return (
    <Container>
      <Link type="text" placeholder="링크를 검색해보세요." />
    </Container>
  );
}

export default Search;

const Container = styled.div`
  max-width: 106rem;
  margin: 4rem auto;
`;

const Link = styled.input`
  width: 100%;
  padding: 1.5rem 1.6rem 1.5rem 3rem;
  border-radius: 1rem;
  background: #f5f5f5;
  border: none;

  &::placeholder {
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 1.5rem;
    padding-left: 2.5rem;
  }
`;