import Image from 'next/image';
import classNames from 'classnames/bind';
import { ICON } from 'constants/importImg';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);
const { avatar } = ICON;

const Profile = ({ profileData }) => {
  const { email, image_source } = profileData;

  return (
    <div className={cx('profile')}>
      <button className={cx('profile-avatar')}>
        <Image
          fill
          sizes='100%'
          priority
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
