import { MouseEventHandler, ReactNode } from 'react';
import styles from './ModalContentBox.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 모달 내용 컨테이너 프롭 타입 선언
type ModalContentBoxProps = {
  header: ReactNode;
  content: ReactNode;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

// 모달 내용 컨테이너 컴포넌트
export const ModalContentBox = ({
  header,
  content,
  onCloseClick,
}: ModalContentBoxProps) => {
  // 인자로 모달의 헤더와 내용물을 받음
  return (
    <div className={cx('container')}>
      <button onClick={onCloseClick}>
        <img
          className={cx('close')}
          src="../images/close.svg"
          alt="X모양 닫기 버튼"
        />
      </button>
      <div className={cx('items')}>
        {header}
        {content}
      </div>
    </div>
  );
};
