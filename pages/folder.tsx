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
import { useGetLinks } from '@/src/link/util/useGetLinks';
import { useSearchLink } from '@/src/link/util/useSearchLink';
import { useState } from 'react';

export default function Folder() {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] =
    useState<SelectedFolderId>(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

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
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={loading ? null : <CardList links={result} />}
      />
    </Layout>
  );
}
