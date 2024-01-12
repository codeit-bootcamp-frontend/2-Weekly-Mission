import Shared from '@/components/Shared/Shared';
import FolderInfo from '@/components/FolderInfo/FolderInfo';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardReadOnly from '../../components/CardReadOnly/CardReadOnly';

import BASE_PATH from '../api/codeit';

export async function getStaticProps() {
  const { data: links } = await BASE_PATH.get(`users/1/links`);
  const { data: folder } = await BASE_PATH.get(`sample/folder`);

  return {
    props: {
      links: links.data,
      ...folder,
    },
  };
}

export default function SharedPage({ links, folder }: any) {
  const { profileImageSource, name: ownerName } = folder.owner;
  const { name: folderName } = folder;
  return (
    <Shared
      folderInfo={<FolderInfo profileImage={profileImageSource} ownerName={ownerName} folderName={folderName} />}
      searchBar={<SearchBar />}
      cardList={
        <CardList>
          {links?.map((link: any) => (
            <CardReadOnly key={link?.id} {...link} />
          ))}
        </CardList>
      }
    />
  );
}
