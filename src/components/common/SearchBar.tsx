import { useSearchContext } from 'context/SearchContext';
import React from 'react';

import styles from './SearchBar.module.css';

export default function SearchBar() {
  const { searchValue, setSearchValue } = useSearchContext();

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.SearchBarContainer}>
      <div className={styles.SearchBar}>
        <img className={styles.SearchBarIcon} src="/assets/Search.svg"></img>
        <input
          onChange={handleChangeSearchValue}
          value={searchValue}
          className={styles.SearchBarInput}
          placeholder="링크를 검색해 보세요."
        ></input>
        <button
          onClick={() => {
            setSearchValue('');
          }}
        >
          <img className={styles.SearchBarResetIcon} src="/assets/_close.png" alt="닫기 버튼 아이콘" />
        </button>
      </div>
    </div>
  );
}
