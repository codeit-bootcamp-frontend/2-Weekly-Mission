import { ReactNode } from 'react';
import styles from './SharedLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// shared 페이지 레이아웃의 프롭 타입 선언
// 프롭으로 컴포넌트를 넣음.
type SharedLayoutProps = {
  folderInfo: ReactNode;
  searchBar: ReactNode;
  cardList: ReactNode;
};

// shared 페이지의 레이아웃 컴포넌트
export const SharedLayout = ({
  folderInfo,
  searchBar,
  cardList,
}: SharedLayoutProps) => {
  return (
    <div className={cx('container')}>
      {folderInfo}
      <div className={cx('items')}>
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
