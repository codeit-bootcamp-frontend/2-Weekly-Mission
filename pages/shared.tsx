import { useGetFolder } from '@/components/folder/data-access-folder';
import { FolderInfo } from '@/components/folder/ui-folder-info';
import { CardList } from '@/components/link/ui-card-list';
import { ReadOnlyCard } from '@/components/link/ui-read-only-card';
import { SearchBar } from '@/components/link/ui-search-bar';
import { useSearchLink } from '@/components/link/util-search-link/useSearchLink';
import { SharedLayout } from '@/components/page-layout/SharedLayout';
import { Layout } from '@/components/sharing/feature-layout';

export default function Shared() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};
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
