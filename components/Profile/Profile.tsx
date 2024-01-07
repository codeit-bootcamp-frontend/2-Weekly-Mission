import Image from 'next/image';
import styles from './Profile.module.css';

export default function Profile({ profile }: any) {
  return (
    <div className={styles.Profile}>
      <Image className={styles.ProfileImage} src={profile.image_source} alt='프로필 이미지' />
      <span className={styles.ProfileEmail}>{profile.email}</span>
    </div>
  );
}
