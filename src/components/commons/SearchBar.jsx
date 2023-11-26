import React from 'react';

import SearchIcon from '../../../image/search/Search.svg'

import './SearchBar.css';

function SearchBar() {
  return (
    <form className='search-bar'>
      <img className='search-bar__search-icon' src={SearchIcon} alt='검색 아이콘'/>
      <input className='search-bar__input' type="text" placeholder={`링크를 검색해 보세요.`} />
    </form>
  );
}

export default SearchBar;
