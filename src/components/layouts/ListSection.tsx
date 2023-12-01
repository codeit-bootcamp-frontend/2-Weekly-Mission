import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../molecules/SearchBar';
import Card from '../molecules/Card';
import { Folder } from '../../utils/interfaces';

const Container = styled.div`
  width: 80%;
  max-width: 1520px;
  margin: 0 auto;
  padding: 4rem 0;
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
      <SearchBar />
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
