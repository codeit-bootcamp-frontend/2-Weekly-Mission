import shareIcon from '../assets/share.svg';
import penIcon from '../assets/pen.svg';
import deleteIcon from '../assets/delete.svg';
import '../styles/FolderTitle.css';

const optionItems = [
  {
    icon : shareIcon,
    name : '공유'
  },
  {
    icon : penIcon,
    name : '이름 변경'
  },
  {
    icon : deleteIcon,
    name : '삭제'
  }
]

const Option = ({ icon, name }) => {
  return (
    <button className='option--item'>
      <img src={icon} alt={`${name} 아이콘`} className='option--icon'/>
      <p className='option--name'>{name}</p>
    </button>
  )
};

const FolderTitle = () => {
  return (
    <div className='folder-title--container'>
      <p className='folder-title'>유용한 글</p>
      <div className='option--container'>
        {optionItems.map((option) => <Option icon={option.icon} name={option.name}/>)}
      </div>
    </div>
  )
};

export default FolderTitle;
