import Link from 'next/link';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.test}>
      <Link href='/shared'>
        <h1>shared</h1>
      </Link>
      <Link href='/folder'>
        <h1>folder</h1>
      </Link>
    </div>
  );
}
