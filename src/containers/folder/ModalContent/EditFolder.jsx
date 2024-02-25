import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import { editFolder } from 'apis/folder';
import InputField from 'components/common/InputField/InputField';
import BaseButton from 'components/common/Button/BaseButton';
import styles from './ModalContent.module.scss';

const cx = classNames.bind(styles);

const EditFolder = ({ folderId, handleModalClose }) => {
  const { handleSubmit, reset } = useFormContext();
  const queryClient = useQueryClient();
  const { mutate: editFolderMutation } = useMutation({
    mutationFn: editFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folders'] });
    },
  });

  const onEditFolderSubmit = (data) => {
    const newFolder = { folderId, name: data };
    editFolderMutation(newFolder);
    handleModalClose();
    reset();
  };

  return (
    <form className={cx('modal-form')} onSubmit={handleSubmit(onEditFolderSubmit)}>
      <InputField label='' name='name' placeholder='내용 입력' isRequired />
      <BaseButton text='변경하기' size='lg' type='submit' />
    </form>
  );
};

export default EditFolder;
