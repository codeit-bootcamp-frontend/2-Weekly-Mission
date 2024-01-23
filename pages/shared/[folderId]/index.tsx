// shared 페이지

import { SharedLayout } from '@/page-layout/SharedLayout/SharedLayout';
import { Layout } from '@/src/commons/feature-layout/Layout';
import { FolderInfo } from '@/src/folder/ui-folder-info/FolderInfo';
import { useGetFolder } from '@/src/folder/util/useGetFolder';
import { CardList } from '@/src/link/ui-card-list/CardList';
import { ReadOnlyCard } from '@/src/link/ui-read-only-card/ReadOnlyCard';
import { SearchBar } from '@/src/link/ui-search-bar/SearchBar';
import { useGetLinks } from '@/src/link/util/useGetLinks';
import { useSearchLink } from '@/src/link/util/useSearchLink';
import { useGetUser } from '@/src/user/useGetUser';
import { useRouter } from 'next/router';

export default function Shared() {
  const router = useRouter();
  const { folderId } = router.query;
  const { data: folder } = useGetFolder(folderId as string); // 샘플 폴더 데이터
  const { data: user } = useGetUser(folder.userId as number);
  const { data: links } = useGetLinks(Number(folderId), folder.userId);

  // return;

  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={user.profileImage}
            ownerName={user.ownerName}
            folderName={folder.name}
          />
        }
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        cardList={
          <CardList>
            {result?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
}
