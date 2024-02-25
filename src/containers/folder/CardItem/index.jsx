import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLink } from 'apis/link';
import classNames from 'classnames/bind';
import BaseButton from 'components/common/Button/BaseButton';
import IconButton from 'components/common/Button/IconButton';
import Modal from 'components/common/Modal';
import FolderList from 'containers/folder/ModalContent/FolderList';
import useModalState from 'hooks/useModalState';
import { getDateDiff, getFormatDate, handleOutsideClick } from 'utils';
import { IMAGE_URL, ICON } from 'constants/importImg';
import { SELECT_MENU } from 'constants/listOption';
import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);
const { empty } = IMAGE_URL;
const { star, more } = ICON;

const CardItem = ({ id, url, image_source, created_at, description, folderList }) => {
  const selectRef = useRef(null);
  const queryClient = useQueryClient();
  const { modalState, toggleModal } = useModalState(['addLink', 'deleteLink']);
  const [toggle, setToggle] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { mutate: deleteLinkMutation } = useMutation({
    mutationFn: deleteLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folders', folderId, 'links'] });
    },
  });

  const handleStarToggleClick = () => setToggle((prev) => !prev);
  const handleMenuClick = () => setIsMenuActive((prev) => !prev);
  const handleClose = () => setIsMenuActive(false);
  const handleModalType = (type) => {
    toggleModal(type);
  };
  const handleDeleteLink = () => {
    deleteLinkMutation(id);
    toggleModal('deleteLink');
  };

  useEffect(() => {
    const handleClick = (e) => {
      handleOutsideClick(e, selectRef, handleClose);
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

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
              sizes='100%'
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

      <Modal
        isModalOpen={modalState.addLink}
        handleModalClose={() => toggleModal('addLink')}
        modalTitle='폴더에 추가'
        subTitle={url}
        renderContent={
          <FolderList
            folderList={folderList}
            url={url}
            handleModalClose={() => toggleModal('addLink')}
          />
        }
      />

      <Modal
        isModalOpen={modalState.deleteLink}
        handleModalClose={() => toggleModal('deleteLink')}
        modalTitle='링크 삭제'
        subTitle={url}
        renderContent={
          <BaseButton
            text='삭제하기'
            variant='delete'
            size='lg'
            onClick={handleDeleteLink}
          />
        }
      />
    </>
  );
};

export default CardItem;
