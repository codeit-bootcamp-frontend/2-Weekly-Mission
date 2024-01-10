import { useState, useMemo } from 'react';

import styles from './MainContent.module.scss';
import classNames from 'classnames/bind';

import SearchForm from 'components/common/SearchForm';
import GridLayout from 'components/layout/Grid';

import { LinkContext } from 'stores/provider/LinkProvider';
import { useStoredData } from 'hooks/useStoredData';

import CardItem from 'containers/shared/CardItem';

const cx = classNames.bind(styles);
const foundKeyArr = ['url', 'title', 'description'];

const MainContent = () => {
  const { storedData } = useStoredData(LinkContext);
  const { links: linksData } = storedData;

  const [keyword, setKeyword] = useState();

  const searchCardList = useMemo(() => {
    if (!keyword?.length) return linksData;

    return linksData.filter((item) =>
      foundKeyArr.some((key) => item[key]?.toLowerCase().includes(keyword.toLowerCase()))
    );
  }, [keyword, linksData]);

  return (
    <main className={cx('main-content')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('col')}>
            <SearchForm setKeyword={setKeyword} />
            <GridLayout>
              {searchCardList.map((item) => (
                <CardItem key={item.id} {...item} />
              ))}
            </GridLayout>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MainContent;
