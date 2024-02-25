import classNames from 'classnames/bind';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { deleteFolder } from 'apis/folder';
import BaseButton from 'components/common/Button/BaseButton';
import MixButton from 'components/common/Button/MixButton';
import Modal from 'components/common/Modal';
import SharedLink from 'containers/folder/ModalContent/SharedLink';
import EditFolder from 'containers/folder/ModalContent/EditFolder';
import useModalState from 'hooks/useModalState';
import { ICON } from 'constants/importImg';
import styles from './FilterOption.module.scss';

const cx = classNames.bind(styles);
const {
  filterOption: { shared, edit, remove },
} = ICON;

const FilterOptions = ({ currentFolder, currentFolderId }) => {
  const { reset } = useFormContext();
  const queryClient = useQueryClient();
  const { modalState, toggleModal } = useModalState([
    'shareFolder',
    'editFolder',
    'deleteFolder',
  ]);

  const handleFolderShareClick = () => toggleModal('shareFolder');
  const handleFolderEditClcik = () => toggleModal('editFolder');
  const handleFolderDeleteClick = () => toggleModal('deleteFolder');

  const { mutate: deleteFolderMutation } = useMutation({
    mutationFn: deleteFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folders'] });
    },
  });

  const handleDeleteFolder = () => {
    deleteFolderMutation(currentFolderId);
    handleFolderDeleteClick();
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
          onClick={handleFolderDeleteClick}
        />
      </div>

      <Modal
        isModalOpen={modalState.shareFolder}
        handleModalClose={handleFolderShareClick}
        modalTitle='폴더 공유'
        subTitle={currentFolder}
        renderContent={<SharedLink folderId={currentFolderId} />}
      />

      <Modal
        isModalOpen={modalState.editFolder}
        handleModalClose={handleFolderEditClcik}
        modalTitle='폴더 이름 변경'
        renderContent={
          <EditFolder
            folderId={currentFolderId}
            handleModalClose={handleFolderEditClcik}
          />
        }
      ></Modal>

      <Modal
        isModalOpen={modalState.deleteFolder}
        handleModalClose={handleFolderDeleteClick}
        modalTitle='폴더 삭제'
        subTitle={currentFolder}
        renderContent={
          <BaseButton
            text=' 삭제하기'
            variant='delete'
            size='lg'
            onClick={handleDeleteFolder}
          />
        }
      />
    </>
  );
};

export default FilterOptions;
