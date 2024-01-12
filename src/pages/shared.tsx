import { CardForShared } from 'components/common/CardForShared';
import SearchBar from 'components/common/SearchBar';
import ContentLayout from 'components/others/ContentLayout';
import FolderBanner from 'components/others/FolderBanner';
import { linkItem } from 'constants/type';
import { SearchContextProvider } from 'context/SearchContext';
import { useSearchContext } from 'context/SearchContext';
import { getSampleUserFolder } from 'utils/api/fetchApi';
import { useEffect, useState } from 'react';
import { SampleUserFolder } from 'constants/type';
import styles from 'styles/folder.module.css';
import Gnb from 'components/common/Gnb';
import Footer from 'components/common/Footer';

export default function SharedPage() {
  return (
    <SearchContextProvider>
      <Gnb />
      <SharedLayout />
      <Footer />
    </SearchContextProvider>
  );
}

function SharedLayout() {
  const { searchValue } = useSearchContext();

  const [filteredLinks, setFilteredLinks] = useState<linkItem[]>([]);
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

  function filterLinks(searchKeyword: string): linkItem[] {
    return sampleUserFolder.links.filter((link) =>
      Object.values(link).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );
  }

  async function loadSampleFolder() {
    const sampleUserFolder = await getSampleUserFolder();
    setSampleUserFolder({ ...sampleUserFolder });
    setFilteredLinks(sampleUserFolder.links);
  }

  useEffect(() => {
    loadSampleFolder();
  }, []);

  return (
    <ContentLayout>
      <FolderBanner folder={sampleUserFolder} />
      <SearchBar filterLinks={filterLinks} setFilteredLinks={setFilteredLinks} />
      {searchValue && (
        <div className={styles.searchResult}>
          <span className={styles.searchKeyword}>{searchValue}</span>로 검색한 결과입니다.
        </div>
      )}
      {sampleUserFolder.links.length ? (
        filterLinks(searchValue).length ? (
          <CardForShared links={filteredLinks} />
        ) : (
          <div className={styles.noLinks}> 검색결과가 없습니다.</div>
        )
      ) : (
        <div className={styles.noLinks}>저장된 링크가 없습니다.</div>
      )}
    </ContentLayout>
  );
}
