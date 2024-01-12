import { useRef, useEffect } from 'react';
import Image from 'next/image';

import styles from './Modal.module.scss';
import classNames from 'classnames/bind';

import { Overlay } from 'components/common/Overlay';
import { handleOutsideClick } from 'utils';
import { ICON } from 'constants/importImg';

const cx = classNames.bind(styles);
const { close } = ICON;

const Dialog = ({ onClose, modalTitle, subTitle, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      handleOutsideClick(e, modalRef, onClose);
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  return (
    <Overlay>
      <div ref={modalRef} className={cx('modal')}>
        <button
          className={cx('modal-btn-close')}
          aria-label='모달창 닫기 버튼'
          onClick={onClose}
        >
          <Image src={close.url} alt={close.alt} />
        </button>
        <header className={cx('modal-header')}>
          <h1 className={cx('modal-header-title')}>{modalTitle}</h1>
          <p className={cx('modal-header-sub-title')}>{subTitle}</p>
        </header>
        {children}
      </div>
    </Overlay>
  );
};

export default Dialog;
