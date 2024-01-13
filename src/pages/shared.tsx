import { CardForShared } from 'components/common/CardForShared';
import SearchBar from 'components/common/SearchBar';
import ContentLayout from 'components/others/ContentLayout';
import FolderBanner from 'components/others/FolderBanner';
import { SearchContextProvider } from 'context/SearchContext';
import { useSearchContext } from 'context/SearchContext';
import { getSampleUserFolder } from 'utils/api/fetchApi';
import { SampleUserFolder } from 'constants/type';
import styles from 'styles/folder.module.css';
import Gnb from 'components/common/Gnb';
import Footer from 'components/common/Footer';
import filterLinks from 'utils/filtering';

export async function getStaticProps() {
  const sampleUserFolder = await getSampleUserFolder();
  return {
    props: {
      sampleUserFolder,
    },
  };
}

export default function SharedPage({ sampleUserFolder }: { sampleUserFolder: SampleUserFolder }) {
  return (
    <SearchContextProvider>
      <Gnb />
      <SharedLayout initialSampleUserFolder={sampleUserFolder} />
      <Footer />
    </SearchContextProvider>
  );
}

function SharedLayout({ initialSampleUserFolder }: { initialSampleUserFolder: SampleUserFolder }) {
  const { searchValue } = useSearchContext();

  const sampleUserFolder = initialSampleUserFolder;
  const filteredLinks = filterLinks(searchValue, sampleUserFolder.links);

  return (
    <ContentLayout>
      <FolderBanner folder={sampleUserFolder} />
      <SearchBar />
      {searchValue && (
        <div className={styles.searchResult}>
          <span className={styles.searchKeyword}>{searchValue}</span>로 검색한 결과입니다.
        </div>
      )}
      {sampleUserFolder.links.length ? (
        filteredLinks.length ? (
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
