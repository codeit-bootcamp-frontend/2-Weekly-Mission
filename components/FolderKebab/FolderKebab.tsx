import { CARD_KEBAB } from './constants';
import styles from './FolderKebab.module.css';

export default function FolderKebab() {
  return <img className={styles.CardKebab} src={CARD_KEBAB} alt='케밥 이미지' />;
}
