import { MouseEventHandler } from 'react';
import styles from './FolderItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// add-link 모달창의 폴더 리스트 프롭 타입 선언
type FolderItemProps = {
  folderName: string;
  linkCount: number;
  isSelected?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

// add-link 모달창의 폴더 리스트 컴포넌트
export const FolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}: FolderItemProps) => {
  return (
    <button
      className={cx('button', { selected: isSelected })}
      onClick={onClick}>
      <span className={cx('name', { selected: isSelected })}>{folderName}</span>
      <span className={cx('count')}>{linkCount}개 링크</span>
      {isSelected && (
        <img className={cx('check')} src="images/check.svg" alt="체크 아이콘" />
      )}
    </button>
  );
};
