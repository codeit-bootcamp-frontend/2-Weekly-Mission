import styles from './ContentLayout.module.css';

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.layout}>{children}</div>;
}
