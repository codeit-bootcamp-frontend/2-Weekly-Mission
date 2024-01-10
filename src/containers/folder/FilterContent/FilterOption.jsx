import { useState } from 'react';

import styles from './FilterOption.module.scss';
import classNames from 'classnames/bind';

import MyButton from 'components/common/Button/MyButton';
import MixButton from 'components/common/Button/MixButton';
import Dialog from 'components/common/Modal';
import Input from 'components/common/Input';
import SharedLink from 'containers/folder/ModalContent/SharedLink';

import { ICON } from 'stores/importImg';

const cx = classNames.bind(styles);
const {
  filterOption: { shared, edit, remove },
} = ICON;

const FilterOptions = ({ currentFolder, currentFolderId }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const handleFolderShareClick = () => setIsShareModalOpen(true);
  const handleFolderEditClcik = () => setIsEditModalOpen(true);
  const handleFolderRemoveClick = () => setIsRemoveModalOpen(true);

  const handleModalClose = () => {
    setIsShareModalOpen(false);
    setIsEditModalOpen(false);
    setIsRemoveModalOpen(false);
  };

  return (
    <>
      <div className={cx('filter-options')}>
        <MixButton
          text='공유'
          textSize={14}
          textColor={'#9FA6B2'}
          startIcon={shared.url}
          iconSize={18}
          alt={shared.alt}
          onClick={handleFolderShareClick}
        />
        <MixButton
          text='이름 변경'
          textSize={14}
          textColor={'#9FA6B2'}
          startIcon={edit.url}
          iconSize={18}
          alt={edit.alt}
          onClick={handleFolderEditClcik}
        />
        <MixButton
          text='삭제'
          textSize={14}
          textColor={'#9FA6B2'}
          startIcon={remove.url}
          iconSize={18}
          alt={remove.alt}
          onClick={handleFolderRemoveClick}
        />
      </div>

      {isShareModalOpen && (
        <Dialog
          modalTitle='폴더 공유'
          subTitle={currentFolder}
          onClose={handleModalClose}
        >
          <SharedLink currentFolderId={currentFolderId} />
        </Dialog>
      )}

      {isEditModalOpen && (
        <Dialog modalTitle='폴더 이름 변경' onClose={handleModalClose}>
          <div className={cx('modal-content')}>
            <Input placeholder='내용 입력' />
          </div>
          <MyButton text='변경하기' size='lg' />
        </Dialog>
      )}

      {isRemoveModalOpen && (
        <Dialog
          modalTitle='폴더 삭제'
          subTitle={currentFolder}
          onClose={handleModalClose}
        >
          <MyButton text=' 삭제하기' variant='delete' size='lg' />
        </Dialog>
      )}
    </>
  );
};

export default FilterOptions;
