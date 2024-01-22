import React from 'react';
import LogoImg from '../../images/logo.svg';
import { HeaderApi } from '../../api';
import { useEffect, useState } from 'react';
import '../Main/CSS/Landing.css';
import { UserHeaderT } from '../../apiType';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [userData, setUserData] = useState<UserHeaderT>();
  const navigate = useNavigate();

  const fetchData = async (): Promise<void> => {
    try {
      const userResponse = await HeaderApi();
      setUserData(userResponse);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const HomeNavigate = () => {
    navigate('/');
  };

  return (
    <nav className="nav-container">
      <div className="nav-box">
        <img
          src={LogoImg}
          alt="홈으로 연결된 Linkbrary 로고"
          className="logo"
          onClick={HomeNavigate}
        />
        {userData ? (
          <div className="UserContainer">
            <p className="UserEmail">
              <img
                src={`${userData.profileImageSource}`}
                alt="UserImg"
                className="UserImg"
              />
              {`${userData.email}`}
            </p>
          </div>
        ) : (
          <a className="cta cta-short" href="signin.html">
            로그인
          </a>
        )}
      </div>
    </nav>
  );
}
