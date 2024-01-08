import React from 'react';
import Image from 'next/image';
import CloseImg from '@/public/images/close.svg';
import styles from './SearchBar.module.css';

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ searchValue = '', setSearchValue }: Props) {
  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type='text'
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder='🔍 링크를 검색해 보세요.'
      />
      {searchValue && (
        <button onClick={() => setSearchValue('')}>
          <Image
            className={styles.closeImage}
            src={CloseImg}
            alt='입력한 검색어를 모두 삭제하는 엑스모양 아이콘'
            width={12}
            height={12}
          />
        </button>
      )}
    </div>
  );
}
