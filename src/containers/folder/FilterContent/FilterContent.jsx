import { useState, useMemo } from 'react';
import classNames from 'classnames/bind';
import { useQuery } from '@tanstack/react-query';
import { getFolders } from 'apis/folder';
import { getFilteredLinks } from 'apis/link';
import Spinner from 'components/common/LoadingSpinner';
import EmptyContent from 'components/layout/EmptyContent';
import GridLayout from 'components/layout/Grid';
import CardItem from 'containers/folder/CardItem';
import Filter from './Filter';
import FilterOptions from './FilterOption';
import styles from './FilterContent.module.scss';

const cx = classNames.bind(styles);
const foundKeyArr = ['url', 'title', 'description'];

const FilterContent = ({ keyword }) => {
  const [title, setTitle] = useState('전체');
  const [folderId, setFolderId] = useState(undefined);

  const { data: folderList, isLoading } = useQuery({
    queryKey: ['folders'],
    queryFn: getFolders,
  });

  const { data: filteredFolders } = useQuery({
    queryKey: ['folders', folderId, 'links'],
    queryFn: () => getFilteredLinks(folderId),
  });

  const searchCardList = useMemo(() => {
    if (!keyword?.length) return filteredFolders;

    return filteredFolders.filter((folders) =>
      foundKeyArr.some((key) =>
        folders[key]?.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  }, [keyword, filteredFolders]);

  const isLinksEmpty = !filteredFolders || Object.keys(filteredFolders).length === 0;
  const isFilterActive = !!folderId;

  return (
    <>
      <div className={cx('filter-content')}>
        <Filter
          folderList={folderList}
          setFolderId={setFolderId}
          folderId={folderId}
          setTitle={setTitle}
        />

        <header className={cx('filter-content-header')}>
          <h3 className={cx('filter-content-header-title')}>{title}</h3>
          {isFilterActive && (
            <FilterOptions currentFolder={title} currentFolderId={folderId} />
          )}
        </header>

        {isLoading && <Spinner />}

        {isLinksEmpty ? (
          <EmptyContent />
        ) : (
          <GridLayout>
            {searchCardList.map((item) => (
              <CardItem key={item.id} {...item} folderList={folderList} />
            ))}
          </GridLayout>
        )}
      </div>
    </>
  );
};

export default FilterContent;
