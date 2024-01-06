import styles from './NoLink.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 폴더에 저장된 링크가 없을 때 보여주는 컴포넌트
export const NoLink = () => {
  return (
    <div className={cx('container')}>
      <span className={cx('message')}>저장된 링크가 없습니다</span>
    </div>
  );
};
