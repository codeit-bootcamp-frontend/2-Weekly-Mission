import styles from './FloderList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FolderList = ({ folderList }) => {
  return (
    <ul className={cx('add-folder-list')}>
      {folderList.map((item) => (
        <li key={item.id} className={cx('add-folder-list-item')}>
          <p>{item.name}</p>
          <span>{item.link.count}개 링크</span>
        </li>
      ))}
    </ul>
  );
};

export default FolderList;
