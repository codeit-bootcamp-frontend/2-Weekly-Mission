import { CardForShared } from 'components/common/CardForShared';
import SearchBar from 'components/common/SearchBar';
import ContentLayout from 'components/others/ContentLayout';
import FolderBanner from 'components/others/FolderBanner';
import { UserLinkItem } from 'constants/type';
import { SearchContextProvider } from 'context/SearchContext';
import { useSearchContext } from 'context/SearchContext';
import { getSampleUserFolder } from 'pages/api/fetchApi';
import { useEffect, useState } from 'react';
import { SampleUserFolder } from 'constants/type';

export default function SharedPage() {
  return (
    <SearchContextProvider>
      <SharedLayout />
    </SearchContextProvider>
  );
}

function SharedLayout() {
  const { searchValue } = useSearchContext();

  const [filteredLinks, setFilteredLinks] = useState<UserLinkItem[]>([]);
  const [sampleUserFolder, setSampleUserFolder] = useState<SampleUserFolder>({
    id: 0,
    name: '',
    owner: {
      id: 0,
      name: '',
      profileImageSource: '',
    },
    links: [],
  });

  function filterLinks(searchKeyword: string): UserLinkItem[] {
    return sampleUserFolder.links.filter((link) =>
      Object.values(link).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );
  }

  async function loadSampleFolder() {
    const { folder } = await getSampleUserFolder();
    setSampleUserFolder({ ...folder });
    setFilteredLinks(folder.links);
  }

  useEffect(() => {
    loadSampleFolder();
  }, []);

  return (
    <ContentLayout>
      <FolderBanner folder={sampleUserFolder} />
      <SearchBar filterLinks={filterLinks} setFilteredLinks={setFilteredLinks} />
      {searchValue && (
        <div className="searchResult">
          <span className="searchKeyword">{searchValue}</span>로 검색한 결과입니다.
        </div>
      )}
      {sampleUserFolder.links.length ? (
        filterLinks(searchValue).length ? (
          <CardForShared links={filteredLinks} />
        ) : (
          <div className="noLinks"> 검색결과가 없습니다.</div>
        )
      ) : (
        <div className="noLinks">저장된 링크가 없습니다.</div>
      )}
    </ContentLayout>
  );
}
