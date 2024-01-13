import styles from './Profile.module.css';

interface Props {
  name: string;
  email: string;
  imageSource: string;
}

export default function Profile({ name, email, imageSource }: Props) {
  return (
    <div className={styles.user}>
      <img className={styles.userImage} src={imageSource} alt={name} />
      <span className={styles.userEmail}>{email}</span>
    </div>
  );
}
