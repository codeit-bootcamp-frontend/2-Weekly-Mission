import closeIcon from 'assets/_close.png';
import searchIcon from 'assets/Search.svg';
import { linkItem } from 'constants/type';
import { useSearchContext } from 'context/SearchContext';
import { useEffect } from 'react';
import React from 'react';

import styles from './SearchBar.module.css';

interface SearchBarProps {
  filterLinks: (searchValue: string) => linkItem[];
  setFilteredLinks: (filteredLinks: linkItem[]) => void;
}

export default function SearchBar({ filterLinks, setFilteredLinks }: SearchBarProps) {
  const { searchValue, setSearchValue } = useSearchContext();

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setFilteredLinks(filterLinks(searchValue));
  }, [searchValue]);

  return (
    <div className={styles.SearchBarContainer}>
      <div className={styles.SearchBar}>
        <img className={styles.SearchBarIcon} src={searchIcon}></img>
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
          <img className={styles.SearchBarResetIcon} src={closeIcon} alt="닫기 버튼 아이콘" />
        </button>
      </div>
    </div>
  );
}
