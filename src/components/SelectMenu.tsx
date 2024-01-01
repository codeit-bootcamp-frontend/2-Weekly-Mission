import style from '../styles/SelectMenu.module.css';

const SelectMenu = () => {
  return(
    <div className={`${style['select-menu--container']}`}>
      <div className={`${style['menu']} ${style['delete-menu']}`}>삭제하기</div>
      <div className={`${style['menu']} ${style['add-menu']}`}>폴더에 추가</div>
    </div>
  )
};

export default SelectMenu;
