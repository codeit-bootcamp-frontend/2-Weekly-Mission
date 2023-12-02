import { useState, useEffect } from "react";
import { useFolderPageFolder } from "../hooks/folderPageHooks";
import '../styles/FolderLists.css';
import addIcon from '../assets/add.svg';

const Folder = ({id, name , onClick, activeFolder}) => {
  return(
    <button className={`folder--btn ${activeFolder === id ? 'folder-active--btn' : 'folder-inactive--btn'}`} onClick={() => onClick(id)}>
      {name}
    </button>
  )
};

const all = {
  id: 0,
  name: '전체'
}

const FolderLists = ({ folders, activeFolder, onClick}) => {
  // const [activeFolder, setActiveFolder] = useState(0);
  // const folders =[all, ...useFolderPageFolder()];

  if(!folders) return;

  // const handleActiveButton = (id) => {
  //   setActiveFolder(id);
  // }

  return(
    <div className="folder-list--container">
      <div className="folder-btn--container">
        {folders?.map((folder) => <Folder key={folder?.id} name={folder?.name} id={folder?.id} onClick={onClick} activeFolder={activeFolder}></Folder>)}
      </div>
      <button><img src={addIcon} alt="+" className="add--icon"/></button>
    </div>
  )

};

export default FolderLists;
