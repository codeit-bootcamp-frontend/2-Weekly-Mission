// folder 페이지

import { FolderLayout } from '@/page-layout/FolderLayout/FolderLayout';
import { Layout } from '@/src/commons/feature-layout/Layout';
import { useIntersectionObserver } from '@/src/commons/util/useIntersectionObserver';
import { FolderToolBar } from '@/src/folder/feature-folder-tool-bar/FolderToolBar';
import { SelectedFolderId } from '@/src/folder/type';
import { useGetFolders } from '@/src/folder/util/useGetFolders';
import { CardList } from '@/src/link/feature-card-list/CardList';
import { LinkForm } from '@/src/link/feature-link-form/LinkForm';
import { SearchBar } from '@/src/link/ui-search-bar/SearchBar';
import { ALL_LINKS_ID } from '@/src/link/util/constant';
import { useGetLink } from '@/src/link/util/useGetLink';
import { useSearchLink } from '@/src/link/util/useSearchLink';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Folder() {
  const router = useRouter();
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] =
    useState<SelectedFolderId>(ALL_LINKS_ID);
  const { data: links, loading } = useGetLink(selectedFolderId);
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  useEffect(() => {
    if (router.isReady) {
      const currentFolder = router.query['folderId']
        ? Number(router.query['folderId'][0])
        : ALL_LINKS_ID;

      setSelectedFolderId(currentFolder);
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.replace('/signin');
    }
  }, []);

  return (
    <Layout isSticky={false} footerRef={ref}>
      <FolderLayout
        linkForm={<LinkForm hideFixedLinkForm={isIntersecting} />}
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
          />
        }
        cardList={loading ? null : <CardList links={result} />}
      />
    </Layout>
  );
}
