import { useState, useEffect } from 'react';
import { getFolders } from '../api';
import { getTimeAgo } from '../getTimeAgo';
import FloatingAddBtn from './FloatingAddBtn';
import './FloatingAddBtn.css';
import './FolderCard.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FolderCard({ selectedTab }) {
  const [folder, setFolder] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchData = async () => {
    try {
      setIsloading(true);
      setIsError(null);

      const { data } = await getFolders();
      setFolder(data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <span className="loading">로딩중입니다.</span>
      ) : (
        <ul className="folder-card">
          {folder?.map(link => (
            <li className="link-card" key={link.id}>
              <a href={link.url}>
                <img
                  className="card-img"
                  src={link.image_source || process.env.PUBLIC_URL + '/images/no-image.png'}
                  alt="카드 이미지"
                />
                <div className="info-area">
                  <div className="time-ago-area">
                    <span className="time-ago">{getTimeAgo(link.created_at)}</span>
                    <button
                      onClick={e => {
                        e.preventDefault();
                      }}>
                      <img className="kebab-btn" src={process.env.PUBLIC_URL + '/images/kebab.png'} alt="케밥 메뉴" />
                    </button>
                  </div>
                  <p className="title">{link.title}</p>
                  <span className="date">{formatDate(link.created_at)}</span>
                </div>
              </a>
              <button>
                <img className="star-btn" src={process.env.PUBLIC_URL + '/images/star.png'} alt="즐겨 찾기" />
              </button>
            </li>
          ))}
          <FloatingAddBtn />

          {isError?.message && <span className="error">{isError.message}</span>}
        </ul>
      )}
    </>
  );
}

export default FolderCard;
