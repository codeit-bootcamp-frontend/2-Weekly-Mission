import Image from 'next/image';

import styles from './MainBanner.module.scss';
import classNames from 'classnames/bind';

import { LinkContext } from 'stores/provider/LinkProvider';
import { useStoredData } from 'hooks/useStoredData';
import { ICON } from 'stores/importImg';

const cx = classNames.bind(styles);
const { avatar } = ICON;

const MainBanner = () => {
  const { storedData } = useStoredData(LinkContext);
  const { name, owner } = storedData;

  return (
    <section className={cx('main-banner')}>
      <h2 className='visually-hidden'>즐겨찾기 배너</h2>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('col')}>
            <div className={cx('profile')}>
              <div className={cx('profile-avatar')}>
                <Image
                  fill
                  className={cx('profile-avatar-img')}
                  src={owner.profileImageSource || avatar.default.url}
                  alt={avatar.default.alt}
                />
              </div>
              <span className={cx('profile-name')}>{owner.name}</span>
            </div>
            <h3 className={cx('folder-name')}>{name}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainBanner;
