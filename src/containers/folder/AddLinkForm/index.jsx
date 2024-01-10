import { useState } from 'react';
import Image from 'next/image';

import styles from './AddLinkFrom.module.scss';
import classNames from 'classnames/bind';

import { useAsync } from 'hooks/useAsync';
import api from 'apis/api';

import MyButton from 'components/common/Button/MyButton';
import FolderList from 'containers/folder/ModalContent/FolderList';
import Dialog from 'components/common/Modal';

import { INITIAL_FILTER_DATA } from 'stores/initialData';
import { ICON } from 'stores/importImg';

const cx = classNames.bind(styles);
const { liked } = ICON;

const AddLinkForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: { data: filterData },
  } = useAsync(() => api.get('/api/users/1/folders'), INITIAL_FILTER_DATA);

  const handleValueChange = (e) => setInputValue(e.target.value);
  const handleAddButtonClick = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <form className={cx('link-form')}>
        <div className={cx('link-input-group')}>
          <Image
            src={liked.url}
            alt={liked.alt}
            aria-hidden
            className={cx('link-input-group-img')}
          />
          <input
            type='text'
            name='link-url'
            value={inputValue}
            placeholder='링크를 추가해 보세요'
            onChange={handleValueChange}
            className={cx('link-input')}
          />
        </div>
        <MyButton text='추가하기' size='sm' onClick={handleAddButtonClick} />
      </form>

      {isModalOpen && (
        <Dialog onClose={handleModalClose} modalTitle='폴더에 추가' subTitle={inputValue}>
          <div className={cx('modal-content')}>
            <FolderList folderList={filterData} />
            <MyButton text='추가하기' size='lg' />
          </div>
        </Dialog>
      )}
    </>
  );
};

export default AddLinkForm;
