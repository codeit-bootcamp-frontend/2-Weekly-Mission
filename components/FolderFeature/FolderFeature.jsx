import { SHARE_IMAGE, PEN_IMAGE, DELETE_IMAGE } from './constant';
import styles from './FolderFeature.module.css';

export default function FolderFeature({ name }) {
  return (
    <div className={styles.folderFeatureWrap}>
      <h1>{name}</h1>
      <div className={styles.featureList}>
        <div className={styles.feature}>
          <button>
            <img src={SHARE_IMAGE} alt='폴더 공유' />
            <span>공유</span>
          </button>
        </div>
        <div className={styles.feature}>
          <button>
            <img src={PEN_IMAGE} alt='폴더 이름변경' />
            <span>이름 변경</span>
          </button>
        </div>
        <div className={styles.feature}>
          <button>
            <img src={DELETE_IMAGE} alt='폴더 삭제' />
            <span>삭제</span>
          </button>
        </div>
      </div>
    </div>
  );
}
