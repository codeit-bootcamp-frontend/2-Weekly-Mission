import Shared from '@/components/Shared/Shared';
import FolderInfo from '@/components/FolderInfo/FolderInfo';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardReadOnly from '../../components/CardReadOnly/CardReadOnly';

import BASE_PATH from '../api/codeit';

export async function getStaticProps() {
  const { data } = await BASE_PATH.get(`users/1/links`);

  const res = await BASE_PATH.get(`sample/folder`);
  const folder = res.data;

  return {
    props: {
      ...data,
      ...folder,
    },
  };
}

export default function SharedPage({ data, folder }: any) {
  return (
    <Shared
      folderInfo={
        <FolderInfo
          profileImage={folder.owner.profileImageSource}
          ownerName={folder.owner.name}
          folderName={folder.name}
        />
      }
      searchBar={<SearchBar />}
      cardList={
        <CardList>
          {data?.map((data: any) => (
            <CardReadOnly key={data?.id} {...data} />
          ))}
        </CardList>
      }
    />
  );
}
