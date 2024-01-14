import shareIcon from '@/src/assets/searchIcon.svg';
import penIcon from '@/src/assets/pen.svg';
import deleteIcon from '@/src/assets/delete.svg';
import style from './FolderTitle.module.css';
import { ALL_FOLDER } from '@/constants/constants';
import { FolderType } from '@/types/type';
import EditFolderNameModal from '@/src/modal/Components/EditFolderNameModal';
import { useModal } from '@/src/modal/hooks/modalHooks';
import { ComponentType } from 'react';
import DeleteFolderModal from '@/src/modal/Components/DeleteFolderModal';
import React from 'react';
import ShareFolderModal from '@/src/modal/Components/ShareFolderModal';

const optionItems = [
  {
    id : 0,
    icon : shareIcon,
    name : '공유',
    modalComponent: ShareFolderModal
  },
  {
    id : 1,
    icon : penIcon,
    name : '이름 변경',
    modalComponent: EditFolderNameModal
  },
  {
    id : 2,
    icon : deleteIcon,
    name : '삭제',
    modalComponent: DeleteFolderModal
  }
]

const Option = ({ icon, name, Modal, id } : {icon:string, name:string, Modal:ComponentType, id:number}) => {
  const {isOpen, toggleModal} = useModal();
  const modalProps = {
    id:id,
    isOpen: isOpen,
    onClick: toggleModal
  };

  const ModalElement = React.createElement(Modal, modalProps);
  
  return (
    <>
      <button className={`${style['option--item']}`} onClick={toggleModal}>
        <img src={icon} alt={`${name} 아이콘`} className={style['option--icon']}/>
        <p className={style['option--name']}>{name}</p>
      </button>
      {ModalElement}
    </>
  )
};

const FolderTitle = ({ folders, activeFolder } : { folders:FolderType[], activeFolder:number}) => {
  const selectedFolder = activeFolder === 0 ? ALL_FOLDER : folders?.find((folder) => folder.id === activeFolder);

  return (
    <div className={style['folder-title--container']}>
      <p className={style['folder-title']}>{selectedFolder?.name}</p>
      {activeFolder !== 0 &&
        <div className={style['option--container']}>
          {optionItems.map((option) => <Option key={option.id} icon={option.icon} name={option.name} Modal={option.modalComponent} id={activeFolder}/>)}
        </div>
      }
    </div>
  )
};

export default FolderTitle;
