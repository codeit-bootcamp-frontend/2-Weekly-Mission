import { useState } from 'react';
import classNames from 'classnames/bind';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createLink } from 'apis/link';
import BaseButton from 'components/common/Button/BaseButton';
import styles from './FloderList.module.scss';

const cx = classNames.bind(styles);
const FAVORITES_FOLDER = 595;

const FolderList = ({ folderList, url, handleModalClose }) => {
  const [folderId, setFolderId] = useState(FAVORITES_FOLDER);
  const queryClient = useQueryClient();
  const { mutate: addLinkMutation } = useMutation({
    mutationFn: createLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folders', folderId, 'links'] });
    },
  });

  const onAddLinkSubmit = () => {
    if (!url) {
      alert('링크 url을 입력해 주세요!');
      return;
    }
    const addLinkData = { url, folderId };
    addLinkMutation(addLinkData);
    handleModalClose();
  };

  return (
    <div className={cx('add-folder')}>
      <ul className={cx('add-folder-list')}>
        {folderList.map(({ id, name, link_count }) => (
          <li
            key={id}
            className={cx('add-folder-list-item', { active: folderId === id })}
            onClick={() => setFolderId(id)}
          >
            <p>{name}</p>
            <span>{link_count}개 링크</span>
          </li>
        ))}
      </ul>
      <BaseButton text='추가하기' size='lg' type='sumit' onClick={onAddLinkSubmit} />
    </div>
  );
};

export default FolderList;
