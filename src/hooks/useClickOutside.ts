import { MouseEventHandler, RefObject, useEffect } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>, closePopover: () => void) => {
  useEffect(() => {
    const handleClickOutside: (this: Document, ev: MouseEvent) => any = (event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closePopover();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, closePopover]);
};

export default useOutsideClick;
