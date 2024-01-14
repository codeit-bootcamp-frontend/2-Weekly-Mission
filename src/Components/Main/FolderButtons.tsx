import React, { useEffect, useState } from 'react';
import { FolderButtonApi } from '../../api';
import ShareIcon from '../../images/share.svg';
import PenIcon from '../../images/pen.svg';
import DeleteIcon from '../../images/Group 36.svg';
import PlusIcon from '../../images/add.svg';

type SelectType = {
  onSelectValue: (name: string, id: number) => void;
};

type FolderDataTypes = {
  name: string;
  id: number;
};

export default function FolderButtons({ onSelectValue }: SelectType) {
  const [folderData, setFolderData] = useState<FolderDataTypes[]>([]);
  const [value, setValue] = useState<string>('전체');

  const handleClickButton = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ): void => {
    const { name } = e.target as HTMLButtonElement;
    setValue(name);
    onSelectValue(name, id);
  };

  const handleAllButtonClick = (): void => {
    setValue('전체');
    onSelectValue('전체', 0);
  };

  const fetchData = async (): Promise<void> => {
    try {
      const { data } = await FolderButtonApi();
      setFolderData(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="BtnContainer">
        <div className="BtnBox">
          <button
            onClick={handleAllButtonClick}
            name="전체"
            className="FolderBtn"
          >
            전체
          </button>
          {folderData ? (
            folderData?.map((item) => (
              <div key={item.id}>
                <button
                  key={item.id}
                  onClick={(e) => handleClickButton(e, item.id)}
                  name={item.name}
                  className="FolderBtn"
                >
                  {item.name}
                </button>
              </div>
            ))
          ) : (
            <button className="FolderBtn">error</button>
          )}
        </div>
        <button className="FolderPlusBtn">
          <img src={PlusIcon} alt="Plus" />
        </button>
      </div>
      <div className="FolderCardHeaderContainer">
        <h1 className="FolderBtnName">{value}</h1>
        <div className="FolderLinksBtn">
          <button className="FolderLinks">
            <img src={ShareIcon} alt="Share" />
            공유
          </button>
          <button className="FolderLinks">
            <img src={PenIcon} alt="Pen" />
            이름 변경
          </button>
          <button className="FolderLinks">
            <img src={DeleteIcon} alt="Delete" />
            삭제
          </button>
        </div>
      </div>
    </>
  );
}
