import AddLinkBar from 'components/common/AddLinkBar';
import { Cards } from 'components/common/Cards';
const FloatingActionButton = dynamic(() => import('components/common/FloatingActionButton'), { ssr: false });
const Filtering = dynamic(() => import('components/others/Filtering'), { ssr: false });

import Footer from 'components/common/Footer';
import Gnb from 'components/common/Gnb';
import SearchBar from 'components/common/SearchBar';
import ContentLayout from 'components/others/ContentLayout';
import FolderEditButtons from 'components/others/FolderEditButtons';
import { FolderItem, LinkItem, UserInfo } from 'constants/type';
import { useSearchContext } from 'context/SearchContext';
import { SearchContextProvider } from 'context/SearchContext';
import { getFolder, getLinks, getUser } from 'utils/api/fetchApi';
import { useEffect } from 'react';
import styles from 'styles/folder.module.css';
import filterLinks from 'utils/filtering';
import { PageContextProvider, usePageContext } from 'context/PageContext';
import dynamic from 'next/dynamic';

export async function getStaticProps() {
  const folderList = await getFolder();
  const linkList = await getLinks(0); // 전체 링크 리스트 불러오기

  const userData = await getUser();

  return {
    props: {
      folderList,
      linkList,
      userData: userData[0],
    },
  };
}

interface StaticProps {
  folderList: FolderItem[];
  linkList: LinkItem[];
  userData: UserInfo;
}

export default function FolderPage({ folderList, linkList, userData }: StaticProps) {
  return (
    <SearchContextProvider>
      <PageContextProvider initialFolderList={folderList} initialLinkList={linkList}>
        <Gnb userData={userData} />
        <FolderLayout />
        <Footer />
      </PageContextProvider>
    </SearchContextProvider>
  );
}

function FolderLayout() {
  const { searchValue, selectedFolder } = useSearchContext();
  const { folderList, setFolderList, linkList, setLinkList } = usePageContext();

  const filteredLinks = filterLinks(searchValue, linkList);

  async function loadFolder() {
    const data = await getFolder();
    setFolderList(data);
  }

  async function loadLinks() {
    const data = await getLinks(selectedFolder.id);
    setLinkList(data);
  }

  useEffect(() => {
    loadFolder();
  }, []);

  useEffect(() => {
    loadLinks();
  }, [selectedFolder.id, selectedFolder.name]);

  return (
    <ContentLayout>
      <AddLinkBar />
      <SearchBar />
      {searchValue && (
        <div className={styles.searchResult}>
          <span className={styles.searchKeyword}>{searchValue}</span>로 검색한 결과입니다.
        </div>
      )}
      <Filtering chosenFolderId={selectedFolder.id} folder={folderList} />
      <div className={styles.folderDescription}>
        <h1 className={styles.folderName}>{selectedFolder.name}</h1>
        {!!selectedFolder.id && <FolderEditButtons />}
      </div>
      {linkList.length ? (
        filteredLinks.length ? (
          <Cards links={filteredLinks} />
        ) : (
          <div className={styles.noLinks}> 검색결과가 없습니다.</div>
        )
      ) : (
        <div className={styles.noLinks}>저장된 링크가 없습니다.</div>
      )}
      <FloatingActionButton />
    </ContentLayout>
  );
}
