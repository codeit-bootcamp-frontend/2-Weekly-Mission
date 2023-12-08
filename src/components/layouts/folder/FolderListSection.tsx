import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../../molecules/SearchBar';
import FolderBlock from '../../molecules/FolderBlock';
import FolderCard from '../../molecules/FolderCard';
import { Tag, FolderLink } from '../../../utils/interfaces';

const Container = styled.div`
  width: 80%;
  max-width: 1520px;
  margin: 0 auto 10rem;
  padding: 4rem 0;
`;

const FoldersBar = styled.div`
  margin: 4rem 0 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FolderBlockWrapper = styled.div`
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;

const TagAddButton = styled.div`
  cursor: pointer;
`;

const ListsWrapper = styled.div``;

const FolderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FolderTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
`;

const FolderUtilBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FolderUtilButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 4px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray60};
  }

  & + & {
    margin-left: 1.2rem;
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

function FolderListSection() {
  const [folderList, setFolderList] = useState<Tag[] | null>(null);
  const [links, setLinks] = useState<FolderLink[] | null>(null);
  const [nowFolderId, setNowFolderId] = useState<number | null>(null);
  const [nowFolderName, setNowFolderName] = useState('전체');

  const getFolderList = async () => {
    try {
      const res = await fetch('https://bootcamp-api.codeit.kr/api/users/1/folders');
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllLinksData = async () => {
    try {
      const res = await fetch('https://bootcamp-api.codeit.kr/api/users/1/links');
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getLinksData = async () => {
    try {
      const res = await fetch(`https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${nowFolderId}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // const onClickFolderBlock = () => {
  //   setNowFolderId(folderId);
  //   getLinksData();
  //   console.log(folderId);
  // };

  useEffect(() => {
    getFolderList().then((data) => {
      setFolderList(data.data);
    });
    getAllLinksData().then((data) => {
      setLinks(data.data);
    });
  }, []);
  // console.log(folderList);
  // console.log(links);

  return (
    <Container>
      <SearchBar />
      <FoldersBar>
        <FolderBlockWrapper>
          <FolderBlock
            $isActive={nowFolderId === null}
            onClickFolderBlock={() => {
              setNowFolderId(null);
              setNowFolderName('전체');
              getAllLinksData().then((res) => {
                setLinks(res.data);
              });
            }}
          >
            전체
          </FolderBlock>
          {folderList ? (
            folderList.map((data: Tag) => {
              return (
                <FolderBlock
                  key={data.id}
                  $isActive={nowFolderId === data.id}
                  onClickFolderBlock={async () => {
                    setNowFolderId(data.id);
                    setNowFolderName(data.name);
                    const link = await getLinksData();
                    setLinks(link.data);
                  }}
                >
                  {data.name}
                </FolderBlock>
              );
            })
          ) : (
            <p>즐겨찾기 폴더가 존재하지 않습니다.</p>
          )}
        </FolderBlockWrapper>
        <TagAddButton>
          <img src='/images/add.png' alt='add-icon' />
        </TagAddButton>
      </FoldersBar>
      <ListsWrapper>
        <FolderTitleContainer>
          <FolderTitle>{nowFolderName}</FolderTitle>
          <FolderUtilBar>
            <FolderUtilButton>
              <img src='/images/share.png' alt='share-icon' />
              <p>공유</p>
            </FolderUtilButton>
            <FolderUtilButton>
              <img src='/images/pen.png' alt='edit-icon' />
              <p>이름 변경</p>
            </FolderUtilButton>
            <FolderUtilButton>
              <img src='/images/trash-can.png' alt='delete-icon' />
              <p>삭제</p>
            </FolderUtilButton>
          </FolderUtilBar>
        </FolderTitleContainer>
        {links && links.length > 0 ? (
          <CardContainer>
            {links?.map((link) => (
              <FolderCard key={link.id} link={link} />
            ))}
          </CardContainer>
        ) : (
          <NoLinksMessage>저장된 링크가 없습니다.</NoLinksMessage>
        )}
      </ListsWrapper>
    </Container>
  );
}

export default FolderListSection;
