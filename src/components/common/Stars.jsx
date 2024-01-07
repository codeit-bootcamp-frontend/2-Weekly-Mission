import starIcon from 'assets/star_empty.svg';
import fullStarIcon from 'assets/star-full.svg';
import useToggle from 'hooks/useToggle';

import styles from './Stars.module.css';

export default function Stars() {
  const [isFullStar, setIsFullStar] = useToggle();
  const handlePreventDefault = (e) => {
    e.preventDefault();
  };
  return (
    <button className={styles.starToggle} onClick={handlePreventDefault}>
      <img src={isFullStar ? fullStarIcon : starIcon} onClick={setIsFullStar}></img>
    </button>
  );
}
