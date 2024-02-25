import { useState } from 'react';
import classNames from 'classnames/bind';
import SearchForm from 'components/common/SearchForm';
import FilterContent from 'containers/folder/FilterContent/FilterContent';
import styles from './MainContent.module.scss';

const cx = classNames.bind(styles);

const MainContent = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <main className={cx('main-content')}>
      <div className={cx('container')}>
        <SearchForm setKeyword={setKeyword} />
        <FilterContent keyword={keyword} />
      </div>
    </main>
  );
};
export default MainContent;
