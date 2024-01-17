import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <p className={styles.message}>잠시만 기다려 주세요 ...</p>
    </div>
  );
}
