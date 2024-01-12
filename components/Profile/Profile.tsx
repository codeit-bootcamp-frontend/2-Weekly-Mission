import Image from 'next/image';
import styles from './Profile.module.css';

export default function Profile({ profile }: any) {
  const { image_source, email } = profile;

  return (
    <div className={styles.Profile}>
      <Image className={styles.ProfileImage} src={image_source} alt='프로필 이미지' width={28} height={28} />
      <span className={styles.ProfileEmail}>{email}</span>
    </div>
  );
}
