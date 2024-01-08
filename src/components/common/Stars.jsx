import useToggle from 'hooks/useToggle';

import styles from './Stars.module.css';

export default function Stars() {
  const [isFullStar, setIsFullStar] = useToggle();
  const handlePreventDefault = (e) => {
    e.preventDefault();
  };
  return (
    <button className={styles.starToggle} onClick={handlePreventDefault}>
      <img src={isFullStar ? '/assets/star-full.svg' : '/assets/star_empty.svg'} onClick={setIsFullStar}></img>
    </button>
  );
}
