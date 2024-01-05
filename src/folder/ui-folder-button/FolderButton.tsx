import { MouseEventHandler } from 'react';
import styles from './FolderButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 폴더 선택 버튼 컴포넌트 프롭 타이 선언
type FolderButtonProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
};

// 폴더 선택 버튼 컴포넌트
export const FolderButton = ({
  text,
  onClick,
  isSelected = false,
}: FolderButtonProps) => {
  return (
    <button
      className={cx('container', { selected: isSelected })}
      onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};
