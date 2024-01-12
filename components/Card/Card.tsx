import styles from './Card.module.css';

export default function Card({ children, onMouseOver, onMouseLeave }: any) {
  return (
    <div className={styles.Card} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
}
