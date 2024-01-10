import { useState } from 'react';

import styles from './Filter.module.scss';
import classNames from 'classnames/bind';

import { FolderContext } from 'stores/provider/FolderProvider';
import { useSetStoredData } from 'hooks/useStoredData';

import MyButton from 'components/common/Button/MyButton';
import IconButton from 'components/common/Button/IconButton';
import MixButton from 'components/common/Button/MixButton';
import Dialog from 'components/common/Modal';
import Input from 'components/common/Input';

import { ICON } from 'stores/importImg';

const cx = classNames.bind(styles);
const { Addfilter } = ICON;

const Filter = ({ filterData, setTitle }) => {
  const { setCurrentId } = useSetStoredData(FolderContext);
  const [isActiveId, setIsActiveId] = useState(undefined);
  const [isFolderAddModalOpen, setIsFolderAddModalOpen] = useState(false);

  const handleFilterClick = (id, name) => {
    setCurrentId(id);
    setIsActiveId(id);
    setTitle(name);
  };

  const handleFolderAdd = () => setIsFolderAddModalOpen(true);
  const handleModalClose = () => setIsFolderAddModalOpen(false);

  return (
    <>
      <div className={cx('filter')}>
        <ul className={cx('filter-list')}>
          <li className={cx('filter-list-item')}>
            <button
              type='button'
              className={cx('filter-outlined', 'filter-lg', {
                'is-active': isActiveId === undefined,
              })}
              onClick={() => handleFilterClick(undefined, '전체')}
            >
              <span className={cx('filter-lg-name')}>전체</span>
            </button>
          </li>

          {filterData?.map((item) => (
            <li
              key={item.id}
              className={cx('filter-list-item')}
              onClick={() => handleFilterClick(item.id, item.name)}
            >
              <button
                type='button'
                className={cx('filter-outlined', 'filter-lg', {
                  'is-active': isActiveId === item.id,
                })}
              >
                <span className={cx('filter-lg-name')}>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>

        <IconButton
          label='폴더 추가 버튼'
          svg={Addfilter.lg.url}
          alt={Addfilter.lg.alt}
          iconSize={16}
          showMode='lg'
          onClick={handleFolderAdd}
        />

        <MixButton
          text='폴더 추가'
          textSize={16}
          textColor={'#fff'}
          endIcon={Addfilter.sm.url}
          iconSize={16}
          alt={Addfilter.sm.alt}
          showMode='sm'
          fill={true}
          onClick={handleFolderAdd}
        />
      </div>

      {isFolderAddModalOpen && (
        <Dialog modalTitle='폴더 추가' onClose={handleModalClose}>
          <div className={cx('modal-content')}>
            <Input placeholder='내용 입력' />
          </div>
          <MyButton text='추가하기' size='lg' />
        </Dialog>
      )}
    </>
  );
};
export default Filter;
