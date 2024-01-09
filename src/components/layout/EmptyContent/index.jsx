import styles from './EmptyContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EmptyContent = () => {
  return (
    <div className={cx('empty-content')}>
      <p className={cx('empty-content-text')}>저장된 링크가 없습니다.</p>
    </div>
  );
};

export default EmptyContent;
