import { Link } from '../type';
import { ChangeEventHandler, MouseEventHandler, useState } from 'react';

// 링크 검색값을 반환하는 커스텀 훅
export const useSearchLink = (links: Link[]) => {
  const [searchValue, setSearchValue] = useState('');
  const [rebouncedSearchValue, setRebouncedSearchValue] = useState(''); // 리바운싱된 검색값
  const [timer, setTimer] = useState<number | ReturnType<typeof setTimeout>>(0);

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    // 리바운싱
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(async () => {
      setRebouncedSearchValue(searchValue);
    }, 100);

    setSearchValue(e.target.value);
    setTimer(newTimer);
  };

  const handleCloseClick: MouseEventHandler<HTMLButtonElement> = () => {
    setSearchValue('');
  };

  //   배열 필터를 통해 결과를 저장
  const result = links.filter((link) => {
    // lowerCase로 검색
    const searchValueLowerCase = rebouncedSearchValue?.toLowerCase();
    const titleLowerCase = link?.title?.toLowerCase();
    const descriptionLowerCase = link?.description?.toLowerCase();
    const urlLowerCase = link?.url?.toLowerCase();

    return (
      titleLowerCase?.includes(searchValueLowerCase) ||
      descriptionLowerCase?.includes(searchValueLowerCase) ||
      urlLowerCase?.includes(searchValueLowerCase)
    );
  });

  //   함수와 입력값, 결과 반환
  return {
    searchValue,
    handleChange,
    handleCloseClick,
    result,
  };
};
