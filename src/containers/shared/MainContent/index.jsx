import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';
import classNames from 'classnames/bind';
import { useQuery } from '@tanstack/react-query';
import { getFolderLinks } from 'apis/link';
import Spinner from 'components/common/LoadingSpinner';
import SearchForm from 'components/common/SearchForm';
import GridLayout from 'components/layout/Grid';
import CardItem from 'containers/shared/CardItem';
import styles from './MainContent.module.scss';

const cx = classNames.bind(styles);
const foundKeyArr = ['url', 'title', 'description'];

const MainContent = () => {
  const router = useRouter();
  const { folderId } = router.query;
  const [keyword, setKeyword] = useState();

  const { data: folderLinks, isLoading } = useQuery({
    queryKey: ['folders', folderId, 'links'],
    queryFn: () => getFolderLinks(folderId),
  });

  const searchCardList = useMemo(() => {
    if (!keyword?.length) return folderLinks;

    return folderLinks.filter((item) =>
      foundKeyArr.some((key) => item[key]?.toLowerCase().includes(keyword.toLowerCase()))
    );
  }, [keyword, folderLinks]);

  return (
    <main className={cx('main-content')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('col')}>
            <SearchForm setKeyword={setKeyword} />
            <GridLayout>
              {searchCardList?.map((item) => (
                <CardItem key={item.id} {...item} />
              ))}
            </GridLayout>
          </div>
        </div>
      </div>
      {isLoading && <Spinner />}
    </main>
  );
};
export default MainContent;
