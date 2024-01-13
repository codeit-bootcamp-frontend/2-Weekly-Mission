import AddLinkBar from 'components/common/AddLinkBar';
import { Cards } from 'components/common/Cards';
import FloatingActionButton from 'components/common/FloatingActionButton';
import Footer from 'components/common/Footer';
import Gnb from 'components/common/Gnb';
import SearchBar from 'components/common/SearchBar';
import ContentLayout from 'components/others/ContentLayout';
import Filtering from 'components/others/Filtering';
import FolderEditButtons from 'components/others/FolderEditButtons';
import { FolderItem, LinkItem } from 'constants/type';
import { useSearchContext } from 'context/SearchContext';
import { SearchContextProvider } from 'context/SearchContext';
import { getFolder, getLinks } from 'utils/api/fetchApi';
import { useEffect, useState } from 'react';
import styles from 'styles/folder.module.css';
import filterLinks from 'utils/filtering';
import { PageContextProvider, usePageContext } from 'context/PageContext';

export async function getStaticProps() {
  const folderList = await getFolder();
  const linkList = await getLinks(0); // 전체 링크 리스트 불러오기
  return {
    props: {
      folderList,
      linkList,
    },
  };
}

interface StaticProps {
  folderList: FolderItem[];
  linkList: LinkItem[];
}

export default function FolderPage({ folderList, linkList }: StaticProps) {
  return (
    <SearchContextProvider>
      <PageContextProvider initialFolderList={folderList} initialLinkList={linkList}>
        <Gnb />
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
