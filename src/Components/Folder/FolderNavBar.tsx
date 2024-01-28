import React from 'react';
import LogoImg from '../../images/logo.svg';
import { FolderHeaderApi } from '../../api';
import { useEffect, useState } from 'react';
import '../Folder/CSS/Folder.css';
import { useNavigate } from 'react-router-dom';

type NavTypes = {
  image_source: string;
  email: string;
  id: number;
};

export default function FolderNavBar() {
  const [userData, setUserData] = useState<NavTypes[]>([]);
  const navigate = useNavigate();

  const fetchData = async (): Promise<void> => {
    try {
      const { data } = await FolderHeaderApi();
      setUserData(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const homeNavigate = () => {
    navigate('/');
  };
  return (
    <nav className="FolderNavContainer">
      <div className="FolderNavBox">
        <img
          src={LogoImg}
          alt="홈으로 연결된 Linkbrary 로고"
          className="Folderlogo"
          onClick={homeNavigate}
        />
        {userData ? (
          userData.map((item) => (
            <div className="FolderUserContainer" key={item.id}>
              <p className="FolderUserEmail">
                <img
                  src={`${item.image_source}`}
                  alt="FolderUserImg"
                  className="FolderUserImg"
                />
                {`${item.email}`}
              </p>
            </div>
          ))
        ) : (
          <a className="cta cta-short" href="signin.html">
            로그인
          </a>
        )}
      </div>
    </nav>
  );
}
