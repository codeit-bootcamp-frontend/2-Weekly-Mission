import shareIcon from '../assets/share.svg';
import penIcon from '../assets/pen.svg';
import deleteIcon from '../assets/delete.svg';
import style from '../styles/FolderTitle.module.css';
import { ALL_FOLDER } from '../constants/constants';
import { FolderType } from '../constants/type';

const optionItems = [
  {
    id : 0,
    icon : shareIcon,
    name : '공유'
  },
  {
    id : 1,
    icon : penIcon,
    name : '이름 변경'
  },
  {
    id : 2,
    icon : deleteIcon,
    name : '삭제'
  }
]

const Option = ({ icon, name } : {icon:string, name:string}) => {
  return (
    <button className={`${style['option--item']}`}>
      <img src={icon} alt={`${name} 아이콘`} className={`${style['option--icon']}`}/>
      <p className={`${style['option--name']}`}>{name}</p>
    </button>
  )
};

const FolderTitle = ({ folders, activeFolder } : { folders:FolderType[], activeFolder:number}) => {
  const selectedFolder = activeFolder === 0 ? ALL_FOLDER : folders?.find((folder) => folder.id === activeFolder);

  return (
    <div className={`${style['folder-title--container']}`}>
      <p className={`${style['folder-title']}`}>{selectedFolder?.name}</p>
      {activeFolder !== 0 &&
        <div className={`${style['option--container']}`}>
          {optionItems.map((option) => <Option key={option.id} icon={option.icon} name={option.name}/>)}
        </div>
      }
    </div>
  )
};

export default FolderTitle;
