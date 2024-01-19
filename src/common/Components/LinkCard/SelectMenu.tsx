import { useModal } from '@/src/modal/hooks/modalHooks';
import style from './SelectMenu.module.css';
import AddModal from '@/src/modal/Components/AddModal';
import DeleteLinkModal from '@/src/modal/Components/DeleteLinkModal';

const SelectMenu = () => {
  const {isOpen:deleteModalOpen, toggleModal:deleteToggleModal} = useModal();
  const {isOpen:addModalOpen, toggleModal:addToggleModal} = useModal();

  return(
    <div className={style['select-menu--container']}>
      <button className={`${style['menu']} ${style['delete-menu']}`} 
        onClick={(e) => {
          e.preventDefault();
          deleteToggleModal()}}>
        삭제하기
      </button>
      <button className={`${style['menu']} ${style['add-menu']}`} 
        onClick={(e) => {
          e.preventDefault();
          addToggleModal()}}>
        폴더에 추가
      </button>
      <DeleteLinkModal isOpen={deleteModalOpen} onClick={deleteToggleModal}/>
      <AddModal isOpen={addModalOpen} onClick={addToggleModal} />
    </div>
  )
};

export default SelectMenu;
