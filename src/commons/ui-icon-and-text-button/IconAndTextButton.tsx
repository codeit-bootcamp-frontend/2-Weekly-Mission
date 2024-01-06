import { MouseEventHandler } from 'react';
import styles from './IconAndTextButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 툴바 컴포넌트 프롭스
type IconAndTextButtonProps = {
  iconSource: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

// 툴바 컴포넌트 안의 아이콘+버튼(변경, 삭제)
export const IconAndTextButton = ({
  iconSource,
  text,
  onClick,
}: IconAndTextButtonProps) => {
  return (
    <button className={cx('container')} onClick={onClick}>
      <img className={cx('icon')} src={iconSource} alt={`${text} 아이콘`} />
      <span className={cx('text')}>{text}</span>
    </button>
  );
};
