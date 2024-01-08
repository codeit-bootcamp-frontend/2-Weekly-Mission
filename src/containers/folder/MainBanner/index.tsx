import styles from './MainBanner.module.scss';
import classNames from 'classnames/bind';

import AddLinkForm from 'containers/folder/AddLinkForm';

const cx = classNames.bind(styles);

const MainBanner = () => {
  return (
    <section className={cx('main-banenr')}>
      <h2 className='visually-hidden'>링크 추가하기</h2>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('col')}>
            <AddLinkForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
