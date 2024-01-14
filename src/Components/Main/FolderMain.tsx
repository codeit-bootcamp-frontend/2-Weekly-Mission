import React, { useState } from 'react';
import MainSearchBar from './MainSearchBar';
import FolderButtons from './FolderButtons';
import FolderCardContainer from './FolderCardContainer';
import '../../CSS/Folder.css';
import Share from '../Modal/Share';
import Add from '../Modal/Add';

export default function FolderMain() {
  const [selectedValue, setSelectedValue] = useState('전체');
  const [dataId, setDataId] = useState<null | number>(null);

  const handleSelectValue = (name: string, id: number) => {
    setSelectedValue(name);
    setDataId(id);
  };

  return (
    <div className="FolderMain">
      <MainSearchBar />
      <FolderButtons onSelectValue={handleSelectValue} />
      <FolderCardContainer dataId={dataId} selectedValue={selectedValue} />
    </div>
  );
}
