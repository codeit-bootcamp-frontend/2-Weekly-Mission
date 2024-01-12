import { useRef } from 'react';
import Image from 'next/image';

import styles from './SearchForm.module.scss';
import classNames from 'classnames/bind';

import { ICON } from 'constants/importImg';

const cx = classNames.bind(styles);
const { search } = ICON;

const SearchForm = ({ setKeyword }) => {
  const inputRef = useRef();

  const handleChange = () => setKeyword(inputRef.current.value);

  return (
    <form className={cx('search-form')}>
      <Image src={search.url} alt={search.alt} className={cx('search-form-icon')} />
      <input
        ref={inputRef}
        type='search'
        name='q'
        placeholder='링크를 검색해 보세요.'
        aria-label='링크 검색 바'
        onChange={handleChange}
        className={cx('search-form-input')}
      />
    </form>
  );
};
export default SearchForm;
