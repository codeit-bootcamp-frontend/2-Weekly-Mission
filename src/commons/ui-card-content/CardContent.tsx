import styles from './CardContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 카드 내부 요소들 프롭 타입 선언
type CardContentProps = {
  elapsedTime: string;
  description: string;
  createdAt: string;
  isHovered: boolean;
};

// 카드 내부 컨텐츠(이미지 제외) 컴포넌트
export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
}: CardContentProps) => {
  return (
    <div className={cx('container', { hovered: isHovered })}>
      <span className={cx('elapsed-time')}>{elapsedTime}</span>
      <p className={cx('description')}>{description}</p>
      <span className={cx('created-at')}>{createdAt}</span>
    </div>
  );
};
