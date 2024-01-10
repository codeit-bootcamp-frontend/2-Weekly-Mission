import { useState } from 'react';

import styles from './MainContent.module.scss';
import classNames from 'classnames/bind';

import SearchForm from 'components/common/SearchForm';
import FilterContent from 'containers/folder/FilterContent/FilterContent';

const cx = classNames.bind(styles);

const MainContent = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <main className={cx('main-content')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('col')}>
            <SearchForm setKeyword={setKeyword} />
            <FilterContent keyword={keyword} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default MainContent;
