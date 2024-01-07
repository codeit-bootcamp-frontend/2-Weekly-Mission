import styles from './CardList.module.css';

export default function CardList({ children }: any) {
  return <div className={styles.CardList}>{children}</div>;
}
