import { useRouter } from 'next/router';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useQuery } from '@tanstack/react-query';
import { getFolder } from 'apis/folder';
import { getUser } from 'apis/user';
import { ICON } from 'constants/importImg';
import styles from './MainBanner.module.scss';

const cx = classNames.bind(styles);
const { avatar } = ICON;

const MainBanner = () => {
  const router = useRouter();
  const { folderId } = router.query;

  const { data: folderInfo } = useQuery({
    queryKey: ['folders', folderId],
    queryFn: () => getFolder(folderId),
  });

  const { data: profileData } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

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
                  src={profileData?.image_source || avatar.default.url}
                  alt={avatar.default.alt}
                />
              </div>
              <span className={cx('profile-name')}>{profileData?.name}</span>
            </div>
            <h3 className={cx('folder-name')}>{folderInfo?.name}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
