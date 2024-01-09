import { ReactNode } from 'react';
import styles from './FolderLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// folder 페이지 레이아웃의 프롭 타입 선언
// 프롭으로 컴포넌트를 넣음.
type FolderLayoutProps = {
  linkForm: ReactNode;
  searchBar: ReactNode;
  folderToolBar: ReactNode;
  cardList: ReactNode;
};

// folder 페이지의 레이아웃 컴포넌트
export const FolderLayout = ({
  linkForm,
  searchBar,
  folderToolBar,
  cardList,
}: FolderLayoutProps) => {
  return (
    <div className={cx('container')}>
      {linkForm}
      <div className={cx('items')}>
        {searchBar}
        <div className={cx('folder-box')}>
          {folderToolBar}
          {cardList}
        </div>
      </div>
    </div>
  );
};
