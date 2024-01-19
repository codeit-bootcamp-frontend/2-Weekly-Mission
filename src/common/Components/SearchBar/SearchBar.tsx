import searchIcon from '@/src/assets/searchIcon.svg';
import style from './SearchBar.module.css';
import Image from 'next/image';

const SearchBar = () => {
  return(
    <section className={style['search--section']}>
      <div className={style['search-bar--container']}>
        <div className={style['search-bar-placeholder--container']}>
          <div className={style['search--icon']}>
            <Image src={searchIcon} alt='search icon' fill/>
          </div>
          <p className={style['search-bar-placeholder']}>링크를 검색해 보세요.</p>
        </div>
        <input className={style['search-bar']} disabled></input>
      </div>
    </section>
  )
};

export default SearchBar;
