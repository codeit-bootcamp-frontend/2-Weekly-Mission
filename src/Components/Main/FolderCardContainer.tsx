import React, { useEffect, useState } from 'react';
import { FolderLoginProfile } from '../../api';
import KebabIcon from '../../images/kebab.svg';
import StarIcon from '../../images/star.svg';
import NullImg from '../../images/logo.svg';
import '../../CSS/Folder.css';
import KebobMenu from './KebobMenu';

function timeAgo(timestamp : number) {
  const now: Date |number = new Date();
  const seconds = Math.floor(((+now) - (+timestamp)) / 1000);
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
}

export default function FolderCardContainer({ selectedValue, dataId }) {
  const [folderData, setFolderData] = useState([]);
  const [kebobBtnStates, setKebobBtnStates] = useState([]);

  const fetchData = async () => {
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

  const filteredData = folderData.filter(
    (link) => selectedValue === '전체' || link.folder_id === dataId
  );

  const selectHandler = (index) => {
    setKebobBtnStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="FolderCardBoxContainer">
      {filteredData.length > 0 ? (
        filteredData.map((link, i) => (
          <div key={i} className="FolderCardBox">
            <a href={link.url} alt="targetUrl">
              <img
                src={link.image_source || NullImg}
                alt="이미지"
                className="FolderCardImg"
              />
            </a>
            <button className="StarBtn">
              <img src={StarIcon} alt="Star" className="StarImg" />
            </button>
            <div className="FolderCardTextBox">
              <p className="FolderCardUpLoadTime">
                {timeAgo(new Date(link.created_at))}
                <button
                  className="KebabBtn"
                  onClick={() => {
                    selectHandler(i);
                  }}
                >
                  <img src={KebabIcon} alt="Kebab" />
                  {kebobBtnStates[i] ? <KebobMenu /> : null}
                </button>
              </p>
              <p className="FolderCardTextDescription">{link.description}</p>
              <p className="FolderCardTextYears">
                {link.created_at.slice(0, 10)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="FolderNullText">저장된 링크가 없습니다.</p>
      )}
    </div>
  );
}
