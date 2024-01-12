import styles from './Profile.module.scss';
import classNames from 'classnames/bind';

import Image from 'next/image';
import { ICON } from 'constants/importImg';

const cx = classNames.bind(styles);
const { avatar } = ICON;

const Profile = ({ profileData }) => {
  const { email, image_source } = profileData;

  return (
    <div className={cx('profile')}>
      <button className={cx('profile-avatar')}>
        <Image
          fill
          src={image_source || avatar.default.url}
          alt={avatar.default.alt}
          className={cx('profile-avatar-image')}
        />
      </button>
      <div className={cx('profile-name')}>{email}</div>
    </div>
  );
};

export default Profile;
