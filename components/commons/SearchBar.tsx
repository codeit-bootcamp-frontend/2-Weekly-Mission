import React, { useState } from "react";
import Image from "next/image";
import styles from "./SearchBar.module.css";
function SearchBar({ onSearchChange }: { onSearchChange: (value: string) => void }) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div>
      <div className={styles.searchBarContainer}>
        <Image className={styles.searchIcon} src="/images/folder/Search.png" width={20} height={20} alt="검색 아이콘" />
        <input
          className={styles.searchBarInput}
          type="search"
          placeholder="링크로 검색해 보세요."
          value={value}
          onChange={handleChange}
        />
        {value && <button className={styles.closeIcon} onClick={() => setValue("")} />}
      </div>
      {value !== "" ? (
        <div className={styles.searchResult}>
          <span className={styles.searchWords}>{value}</span>로 검색한 결과입니다.
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
