import { TEXT, LINK_ADD_IMAGE } from './constant';
import styles from './LinkAddBar.module.css';

export default function LinkAddBar() {
  return (
    <div className={styles.folderWrap}>
      <div className={styles.linkBarOuterWrap}>
        <div className={styles.linkBarInnerWrap}>
          <div className={styles.linkAddWrap}>
            <img className={styles.linkAddImage} src={LINK_ADD_IMAGE} alt='링크를 추가해보세요' />
            <span>{TEXT.placeholder}</span>
          </div>
          <button>{TEXT.ctaText}</button>
        </div>
      </div>
    </div>
  );
}
