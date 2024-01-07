import FolderKebab from '../FolderKebab/FolderKebab';

import styles from './CardContent.module.css';

export default function CardContent({ elapsedTime, description, created_at, isHovered }: any) {
  const className = isHovered ? `${styles.CardContent} ${styles.CardContentHovered}` : styles.CardContent;

  return (
    <div className={className}>
      <span className={styles.CardContentElapsedTime}>{elapsedTime}</span>
      <p className={styles.CardContentDescription}>{description}</p>
      <span className={styles.CardContentCreatedAt}>{created_at}</span>
      <FolderKebab />
    </div>
  );
}
