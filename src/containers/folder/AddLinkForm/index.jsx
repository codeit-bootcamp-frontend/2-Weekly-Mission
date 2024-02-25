import Image from 'next/image';
import classNames from 'classnames/bind';
import { useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { getFolders } from 'apis/folder';
import FolderList from 'containers/folder/ModalContent/FolderList';
import BaseButton from 'components/common/Button/BaseButton';
import Modal from 'components/common/Modal';
import useModalState from 'hooks/useModalState';
import { ICON } from 'constants/importImg';
import styles from './AddLinkFrom.module.scss';

const cx = classNames.bind(styles);
const { liked } = ICON;

const AddLinkForm = () => {
  const { register, getValues } = useFormContext();
  const { modalState, toggleModal } = useModalState(['addLink']);
  const { data: folderList } = useQuery({
    queryKey: ['folders'],
    queryFn: getFolders,
  });

  const folderName = getValues('name');

  const handleAddLinkClick = () => {
    toggleModal('addLink');
  };

  return (
    <div>
      <form className={cx('link-form')}>
        <div className={cx('link-input-group')}>
          <Image
            src={liked.url}
            alt={liked.alt}
            aria-hidden
            className={cx('link-input-group-img')}
          />
          <input
            {...register('name')}
            type='text'
            placeholder='링크를 추가해 보세요'
            className={cx('link-input')}
          />
        </div>
        <BaseButton text='추가하기' size='sm' onClick={handleAddLinkClick} />
      </form>

      <Modal
        isModalOpen={modalState.addLink}
        handleModalClose={handleAddLinkClick}
        modalTitle='폴더에 추가'
        subTitle={folderName}
        renderContent={
          <FolderList
            folderList={folderList}
            url={folderName}
            handleModalClose={handleAddLinkClick}
          />
        }
      />
    </div>
  );
};

export default AddLinkForm;
