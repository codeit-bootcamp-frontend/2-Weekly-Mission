import style from './FolderLists.module.css';
import addIcon from '@/src/assets/add.svg';
import whiteAddIcon from '@/src/assets/whiteAdd.svg';
import { FolderType } from '@/types/type';
import { useModal } from '@/src/modal/hooks/modalHooks';
import AddFolderModal from '@/src/modal/Components/AddFolderModal';

const Folder = ({id, name , onClick, activeFolder} : { id:number, name:string, activeFolder:number, onClick:(id:number) => void}) => {
  return(
    <button className={`${style['folder--btn']} ${activeFolder === id ? style['folder-active--btn'] : style['folder-inactive--btn']}`} onClick={() => onClick(id)}>
      {name}
    </button>
  )
};

const FolderLists = ({ folders, activeFolder, onClick} : { folders:FolderType[], activeFolder:number, onClick:(id:number) => void}) => {
  const {isOpen, toggleModal} = useModal();

  return(
    <div className={style['folder-list--container']}>
      <div className={style['folder-btn--container']}>
        {folders?.map((folder:FolderType) => <Folder key={folder?.id} name={folder?.name} id={folder?.id} onClick={onClick} activeFolder={activeFolder}></Folder>)}
      </div>
      <button className={style['add--icon']} onClick={toggleModal}><img src={addIcon} alt="+" /></button>
      <button className={style['mobile-add--btn']}><p>폴더 추가</p><img src={whiteAddIcon} alt="+" className="mobile-add--icon"/></button>
      <AddFolderModal isOpen={isOpen} onClick={toggleModal}/>
    </div>
  )
};

export default FolderLists;
