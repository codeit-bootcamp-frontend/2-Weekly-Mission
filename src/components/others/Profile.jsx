import { useMediaQuery } from 'react-responsive';

import styles from './Profile.module.css';

export default function Profile({ profile }) {
  const isMobile = useMediaQuery({
    query: '(max-width :767px)',
  });
  return (
    <div className={styles.profileContainer}>
      <img className={styles.profileImage} src={profile.image_source}></img>
      {!isMobile && <div className={styles.profileEmail}>{profile.email}</div>}
    </div>
  );
}
