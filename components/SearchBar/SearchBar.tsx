import styles from './SearchBar.module.css';
import { SEARCH_IMAGE } from './constant';

export default function SearchBar() {
  return (
    <div className={styles.SearchBar}>
      <input className={styles.SearchBarInput} type='search' placeholder='링크를 검색해 보세요.' />
      <img src={SEARCH_IMAGE} alt='검색창인 것을 알려주는 돋보기 아이콘' className={styles.SearchBarIcon} />
    </div>
  );
}
