import { useGetFolders } from '@/components/folder/data-access-folder';
import { FolderToolBar } from '@/components/folder/feature-folder-tool-bar';
import { SelectedFolderId } from '@/components/folder/type';
import { ALL_LINKS_ID } from '@/components/link/data-access-link/constant';
import { useGetLinks } from '@/components/link/data-access-link';
import { CardList } from '@/components/link/feature-card-list';
import { LinkForm } from '@/components/link/feature-link-form';
import { SearchBar } from '@/components/link/ui-search-bar';
import { useSearchLink } from '@/components/link/util-search-link/useSearchLink';
import { FolderLayout } from '@/components/page-layout/FolderLayout';
import { Layout } from '@/components/sharing/feature-layout';
import { useIntersectionObserver } from '@/components/sharing/util';
import { useState } from 'react';
import { GetServerSidePropsContext } from 'next/types';

type FolderProps = {
  host: string | undefined;
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { req } = context;
  return {
    props: { host: req?.headers?.host },
  };
};

export default function Folder({ host }: FolderProps) {
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
            host={host ?? ''}
          />
        }
        cardList={loading ? null : <CardList links={result} />}
      />
    </Layout>
  );
}
