// shared 페이지

import { SharedLayout } from '@/page-layout/SharedLayout/SharedLayout';
import { Layout } from '@/src/commons/feature-layout/Layout';
import { FolderInfo } from '@/src/folder/ui-folder-info/FolderInfo';
import { useGetFolder } from '@/src/folder/util/useGetFolder';
import { CardList } from '@/src/link/ui-card-list/CardList';
import { ReadOnlyCard } from '@/src/link/ui-read-only-card/ReadOnlyCard';
import { SearchBar } from '@/src/link/ui-search-bar/SearchBar';
import { useSearchLink } from '@/src/link/util/useSearchLink';

export default function Shared() {
  const { data } = useGetFolder(); // 샘플 폴더 데이터
  const { profileImage, ownerName, folderName, links } = data;
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
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
