import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../molecules/Card';
import { Folder } from '../../utils/interfaces';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 4rem 0;
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: 5.4rem;
  border-radius: 10px;
  background-color: #f5f5f5;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.5rem 1.6rem;
`;

const SearchBar = styled.input`
  background-color: #f5f5f5;
  border: none;
  outline: none;
  font-size: 1.6rem;
  margin-left: 2.6rem;
`;

const SearchIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  padding: 4rem 0;
`;

const NoLinksMessage = styled.div`
  padding: 4rem 0;
  margin: 4rem 0;
  font-size: 1.6rem;
  line-height: 24px;
  text-align: center;
`;

function ListSection() {
  const [folder, setFolder] = useState<Folder | null>(null);

  const getFolderData = async () => {
    try {
      const res = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFolderData().then((data) => {
      setFolder(data.folder);
    });
  }, []);
  // console.log(folder);

  const links = folder?.links;
  // console.log(links);

  return (
    <Container>
      <SearchWrapper>
        <SearchBar placeholder='링크를 검색해 보세요' />
        <SearchIcon>
          <img src='/images/search-icon.png' alt='search-icon' />
        </SearchIcon>
      </SearchWrapper>
      {links && links.length > 0 ? (
        <CardContainer>
          {links?.map((link) => (
            <Card key={link.id} link={link} />
          ))}
        </CardContainer>
      ) : (
        <NoLinksMessage>저장된 링크가 없습니다.</NoLinksMessage>
      )}
    </Container>
  );
}

export default ListSection;
