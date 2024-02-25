import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import { createFolder } from 'apis/folder';
import InputField from 'components/common/InputField/InputField';
import BaseButton from 'components/common/Button/BaseButton';
import styles from './ModalContent.module.scss';

const cx = classNames.bind(styles);

const AddFolder = ({ handleModalClose }) => {
  const { handleSubmit } = useFormContext();
  const queryClient = useQueryClient();
  const { mutate: addFolderMutation } = useMutation({
    mutationFn: createFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folders'] });
    },
  });

  const onAddFolderSubmit = (data) => {
    addFolderMutation(data);
    handleModalClose();
  };

  return (
    <form onSubmit={handleSubmit(onAddFolderSubmit)} className={cx('modal-form')}>
      <InputField label='' name='name' placeholder='내용 입력' isRequired />
      <BaseButton text='추가하기' size='lg' type='submit' />
    </form>
  );
};

export default AddFolder;
