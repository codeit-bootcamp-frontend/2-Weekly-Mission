import { useState, useEffect } from "react";
import { useFolderPageFolder } from "../hooks/folderPageHooks";
import '../styles/FolderLists.css';
import addIcon from '../assets/add.svg';

const Folder = ({name}) => {
  return(
    <button className="folder--btn">
      {name}
    </button>
  )
};

const FolderLists = () => {
  const folders = useFolderPageFolder();

  if(!folders) return;

  return(
    <div className="folder-list--container">
      <div className="folder-btn--container">
        {folders?.map((folder) => <Folder key={folder?.id} name={folder?.name}></Folder>)}
      </div>
      <button><img src={addIcon} alt="+" className="add--icon"/></button>
    </div>
  )

};

export default FolderLists;
