import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './CardItem.module.scss';
import classNames from 'classnames/bind';

import MyButton from 'components/common/Button/MyButton';
import IconButton from 'components/common/Button/IconButton';
import Dialog from 'components/common/Modal';
import FolderList from 'containers/folder/ModalContent/FolderList';

import { getDateDiff } from 'utils/getDateDiff';
import { getFormatDate } from 'utils/getFormatDate';
import { handleOutsideClick } from 'utils/handleOutsideClick';

import { IMAGE_URL, ICON } from 'stores/importImg';
import { SELECT_MENU } from 'stores/listOption';

const cx = classNames.bind(styles);
const { empty } = IMAGE_URL;
const { star, more } = ICON;

const CardItem = ({ url, image_source, created_at, description, filterData }) => {
  const selectRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    const handleClick = (e) => {
      handleOutsideClick(e, selectRef, handleClose);
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  const handleModalType = (type) => {
    setModalType(type);
  };

  const handleModalClose = () => setModalType(null);
  const handleStarToggleClick = () => setToggle((prev) => !prev);
  const handleMenuClick = () => setIsMenuActive((prev) => !prev);
  const handleClose = () => setIsMenuActive(false);

  return (
    <>
      <div className={cx('card-item')}>
        <div className={cx('btn-favorite')}>
          <IconButton
            label='즐겨찾기 버튼'
            svg={toggle ? star.active.url : star.default.url}
            alt={toggle ? star.active.alt : star.default.alt}
            iconSize={34}
            onClick={handleStarToggleClick}
          />
        </div>

        <div className={cx('card-item-content')}>
          <Link className={cx('card-item-imgbox')} href={url}>
            <Image
              fill
              src={image_source || empty.url}
              alt='link-thumbnail'
              className={cx('card-item-imgbox-img')}
            />
          </Link>

          <div className={cx('card-item-textBox')}>
            <div className={cx('card-item-textBox-header')}>
              <span className={cx('card-item-textBox-header-date')}>
                {getDateDiff(created_at)}
              </span>
              <div className={cx('btn-more')} ref={selectRef}>
                <IconButton
                  label='더보기 메뉴'
                  svg={more.url}
                  alt={more.alt}
                  iconSize={21}
                  onClick={handleMenuClick}
                />

                {isMenuActive && (
                  <ul className={cx('select-menu')}>
                    {SELECT_MENU.map((item) => (
                      <li
                        key={item.id}
                        className={cx('select-menu-item')}
                        onClick={handleClose}
                      >
                        <button onClick={() => handleModalType(item.type)}>
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <p className={cx('card-item-textBox-desc')}>
              <Link href={url}>{description}</Link>
            </p>
            <span className={cx('card-item-textBox-date')}>
              {getFormatDate(created_at)}
            </span>
          </div>
        </div>
      </div>

      {modalType === 'remove' && (
        <Dialog onClose={handleModalClose} modalTitle='링크 삭제' subTitle={url}>
          <div className={cx('modal-content')}>
            <MyButton text='삭제하기' variant='delete' size='lg' />
          </div>
        </Dialog>
      )}

      {modalType === 'add' && (
        <Dialog onClose={handleModalClose} modalTitle='폴더에 추가' subTitle={url}>
          <div className={cx('modal-content')}>
            <FolderList folderList={filterData} />
            <MyButton text='추가하기' size='lg' />
          </div>
        </Dialog>
      )}
    </>
  );
};

export default CardItem;
