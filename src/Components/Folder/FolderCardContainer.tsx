import React, { useEffect, useState } from 'react';
import { FolderLoginProfile } from '../../api';
import KebabIcon from '../../images/kebab.svg';
import StarIcon from '../../images/star.svg';
import NullImg from '../../images/logo.svg';
import '../Folder/CSS/Folder.css';
import KebobMenu from './KebobMenu';

interface FolderCardContainerProps {
  selectedValue: number | string;
  dataId: number | null;
}

interface FolderDataTypes {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
}

export default function FolderCardContainer({
  selectedValue,
  dataId,
}: FolderCardContainerProps) {
  const [folderData, setFolderData] = useState<FolderDataTypes[]>([]);
  const [kebobBtnStates, setKebobBtnStates] = useState<boolean[]>([]);

  const fetchData = async (): Promise<void> => {
    try {
      const { data } = await FolderLoginProfile();
      setFolderData(data);
      setKebobBtnStates(Array(data.length).fill(false));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const timeAgo = (timestamp: number | Date) => {
    const now: Date | number = new Date();
    const seconds = Math.floor((+now - +timestamp) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    switch (true) {
      case seconds < 120:
        return '1 minute ago';
      case minutes < 60:
        return `${minutes} minutes ago`;
      case hours < 24:
        return '1 hour ago';
      case days < 30:
        return `${days} days ago`;
      case months < 12:
        return `${months} months ago`;
      case years === 1:
        return '1 year ago';
      case years > 1:
        const roundedYears = Math.floor(years);
        return `${roundedYears} years ago`;
      default:
        return 'Just now';
    }
  };

  const filteredData = folderData.filter(
    (item) => selectedValue === '전체' || item.folder_id === dataId
  );

  const selectHandler = (index: number) => {
    setKebobBtnStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="FolderCardBoxContainer">
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div key={item.id} className="FolderCardBox">
            <a href={item.url}>
              <img
                src={item.image_source || NullImg}
                alt="이미지"
                className="FolderCardImg"
              />
            </a>
            <button className="StarBtn">
              <img src={StarIcon} alt="Star" className="StarImg" />
            </button>
            <div className="FolderCardTextBox">
              <p className="FolderCardUpLoadTime">
                {timeAgo(new Date(item.created_at))}
                <button
                  className="KebabBtn"
                  onClick={() => {
                    selectHandler(item.id);
                  }}
                >
                  <img src={KebabIcon} alt="Kebab" />
                  {kebobBtnStates[item.id] ? <KebobMenu /> : null}
                </button>
              </p>
              <p className="FolderCardTextDescription">{item.description}</p>
              <p className="FolderCardTextYears">
                {item.created_at.slice(0, 10)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="FolderNullText">
          <p>저장된 링크가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
