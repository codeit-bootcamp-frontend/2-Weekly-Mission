import { useState, useMemo } from 'react';

import styles from './FilterContent.module.scss';
import classNames from 'classnames/bind';

import { useAsync } from 'hooks/useAsync';
import api from 'apis/api';

import { useStoredData } from 'hooks/useStoredData';
import { FolderContext } from 'stores/provider/FolderProvider';

import Filter from './Filter';
import FilterOptions from './FilterOption';
import EmptyContent from 'components/layout/EmptyContent';
import GridLayout from 'components/layout/Grid';
import CardItem from 'containers/folder/CardItem';

import { INITIAL_FILTER_DATA } from 'stores/initialData';

const cx = classNames.bind(styles);
const foundKeyArr = ['url', 'title', 'description'];

const FilterContent = ({ keyword }) => {
  const { storedData: filteredCardList, currentId } = useStoredData(FolderContext);
  const [title, setTitle] = useState('전체');

  const {
    data: { data: filterData },
  } = useAsync(() => api.get('/api/users/1/folders'), INITIAL_FILTER_DATA);

  const searchCardList = useMemo(() => {
    if (!keyword?.length) return filteredCardList;

    return filteredCardList.filter((item) =>
      foundKeyArr.some((key) => item[key]?.toLowerCase().includes(keyword.toLowerCase()))
    );
  }, [keyword, filteredCardList]);

  const isFolderDataEmpty = Object.keys(filteredCardList).length === 0;
  const isFolderFilterActive = !!currentId;

  return (
    <div className={cx('filter-content')}>
      <Filter filterData={filterData} setTitle={setTitle} />

      <header className={cx('filter-content-header')}>
        <h3 className={cx('filter-content-header-title')}>{title}</h3>
        {isFolderFilterActive && (
          <FilterOptions currentFolder={title} currentFolderId={currentId} />
        )}
      </header>

      {isFolderDataEmpty ? (
        <EmptyContent />
      ) : (
        <GridLayout>
          {searchCardList.map((item) => (
            <CardItem key={item.id} {...item} filterData={filterData} />
          ))}
        </GridLayout>
      )}
    </div>
  );
};

export default FilterContent;
