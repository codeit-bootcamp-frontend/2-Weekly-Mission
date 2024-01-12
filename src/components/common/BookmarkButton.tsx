import useToggle from 'hooks/useToggle';

import styles from './BookmarkButton.module.css';
import { MouseEventHandler } from 'react';

export default function Stars() {
  const [isBookmarked, setIsBookmarked] = useToggle();
  const handlePreventDefault: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };
  return (
    <button className={styles.starToggle} onClick={handlePreventDefault}>
      <img src={isBookmarked ? '/assets/star-full.svg' : '/assets/star_empty.svg'} onClick={setIsBookmarked}></img>
    </button>
  );
}
