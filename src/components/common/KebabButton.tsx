import clsx from 'clsx';
import Modal from 'components/common/Modal';
import stylesForModal from 'components/common/Modal.module.css';
import Selector from 'components/common/Selector';
import useOutsideClick from 'hooks/useClickOutside';
import useModal from 'hooks/useModal';
import { MouseEventHandler, useRef, useState } from 'react';

import styles from './KebabButton.module.css';
import { FolderItem, LinkItem } from 'constants/type';
import { usePageContext } from 'context/PageContext';

export default function KebabButtons({ link }: { link: LinkItem }) {
  const { folderList } = usePageContext();
  const [linkDeletemModalRef, openLinkDeleteModal, closeLinkDeleteModal] = useModal();
  const [linkAddToFolderModalRef, openLinkAddToFolderModal, closeLinkAddToFolderModal] = useModal();

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [selectedFolderId, setSelectedFolderId] = useState<number>(0);
  const selectorRef = useRef<HTMLDivElement>(null);

  const handlePreventDefault: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpened((prev) => !prev);
  };

  useOutsideClick(selectorRef, () => {
    setIsOpened(false);
  });

  return (
    <div ref={selectorRef}>
      <button className={styles.kebabButton} onClick={handlePreventDefault}>
        <img className={styles.moreInfoCebap} src="/assets/kebab.png"></img>
      </button>
      {isOpened && (
        <Selector openLinkDeleteModal={openLinkDeleteModal} openLinkAddToFolderModal={openLinkAddToFolderModal} />
      )}

      <Modal title="링크 삭제" subTitle={link.url} ref={linkDeletemModalRef} onCloseModal={closeLinkDeleteModal} />

      <Modal
        title="폴더에 추가"
        subTitle={link.url}
        ref={linkAddToFolderModalRef}
        onCloseModal={closeLinkAddToFolderModal}
      >
        <div className={stylesForModal.folderList}>
          {folderList.map((folderInfo: FolderItem) => {
            return (
              <button
                key={folderInfo.id}
                className={clsx(
                  stylesForModal.folderItemInfo,
                  selectedFolderId === folderInfo.id && stylesForModal.selectedFolder
                )}
                onClick={() => {
                  setSelectedFolderId(folderInfo.id);
                }}
              >
                <div className={stylesForModal.folderItemInfoWrapper}>
                  <div className={stylesForModal.folderItemName}>{folderInfo.name}</div>
                  <div className={stylesForModal.folderItemLinkCount}>{folderInfo.link?.count}개 링크</div>
                </div>
                {selectedFolderId === folderInfo.id && <img src="/assets/checked.svg"></img>}
              </button>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
