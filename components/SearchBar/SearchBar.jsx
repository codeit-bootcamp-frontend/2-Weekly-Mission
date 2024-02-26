import Image from "next/image";
import styles from "./SearchBar.module.css";
export const SearchBar = ({ value, onChange, onCloseClick }) => {
  return (
    <div className={styles["container"]}>
      <input
        className={styles["input"]}
        type="search"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={onChange}
      />
      <div className={styles["search-icon"]}>
        <Image
          fill
          src="/search.svg"
          alt="검색창인 것을 알려주는 돋보기 아이콘"
        />
      </div>
      {value && (
        <button className={styles["close"]} onClick={onCloseClick}>
          <div className={styles["close"]}>
            <Image src="/close.svg" alt="검색창 닫기 버튼" />
          </div>
        </button>
      )}
    </div>
  );
};
