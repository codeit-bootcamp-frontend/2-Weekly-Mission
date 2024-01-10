import { ProfileType } from '../type';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 프로필 컴포넌트 타입 선언
type ProfileProps = {
  profile: ProfileType;
};

// 네비게이션 바 프로필 컴포넌트
export const Profile = ({ profile }: ProfileProps) => {
  return (
    <div className={cx('container')}>
      <img
        className={cx('image')}
        src={profile.imageSource}
        alt="프로필 이미지"
      />
      <span className={cx('email')}>{profile.email}</span>
    </div>
  );
};
