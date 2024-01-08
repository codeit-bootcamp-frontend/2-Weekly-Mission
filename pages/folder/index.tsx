import { useState } from 'react';

import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Folder from '../../components/Folder/Folder';
import CardReadOnly from '../../components/CardReadOnly/CardReadOnly';
import LinkAddBar from '../../components/LinkAddBar/LinkAddBar';
import FolderNavList from '../../components/FolderNavList/FolderNavList';
import FolderNavClick from '../../components/FolderNavClick/FolderNavClick';
import FolderFeature from '../../components/FolderFeature/FolderFeature';

import BASE_PATH from '../api/codeit';

export async function getStaticProps() {
  const { data: folderNav } = await BASE_PATH.get(`users/1/folders`);

  return {
    props: {
      folderNav: folderNav.data,
    },
  };
}

export default function FolderPage({ folderNav }: any) {
  const [navData, setNavData] = useState([]);

  const onFolderClick = (id: any) => {
    const folderNavInfo = async () => {
      const { data } = await BASE_PATH.get(`users/1/links?folderId=${id}`);
      setNavData(data.data);
    };

    folderNavInfo();
  };

  return (
    <Folder
      linkAddBar={<LinkAddBar />}
      searchBar={<SearchBar />}
      folderFeature={<FolderFeature name={'TEST'} />}
      folderNavList={
        <FolderNavList>
          {folderNav?.map((data: any) => (
            <FolderNavClick key={data.id} {...data} onFolderClick={onFolderClick} />
          ))}
        </FolderNavList>
      }
      cardList={
        <CardList>
          {navData?.map((data: any) => (
            <CardReadOnly key={data?.id} {...data} />
          ))}
        </CardList>
      }
    />
  );
}
