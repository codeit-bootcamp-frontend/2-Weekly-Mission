import logo from '../assets/logo.svg';
import '../styles/Nav.css'
import { useSharedPageUser } from '../hooks/sharedPageHooks';
import { useLocation, useParams } from 'react-router';
import { useEffect } from 'react';
import { useFolderPageUser } from '../hooks/folderPageHooks';

const INITIAL_USER_VALUE = {
  email:'',
  id:0,
  name:'',
  profileImageSource:''
};

const UserProfile = ({profile}) => {
  return(
    <div className='profile--box'>
      <img src={profile.profileImageSource} alt='프로필 아이콘' className='profile-image'/>
      <p className='profile-email'>{profile.email}</p>
    </div>
  )
};

const Nav = () => {
  const location = useLocation();
  const sharedPageUser = useSharedPageUser(INITIAL_USER_VALUE);
  const folderPageUser = useFolderPageUser();
  
  return(
    <header className="landing--header">
      <div className="header-bar">
        <a href="/" className="landing--logo">
          <img src={logo} alt="logo"/>
        </a>
        {location.pathname === '/shared' && (sharedPageUser.email === '' ? <a href="./signin.html" className="login--btn btn">로그인</a> : <UserProfile profile={sharedPageUser} />)}
        {location.pathname === '/folder' && (folderPageUser.email === '' ? <a href="./signin.html" className="login--btn btn">로그인</a> : <UserProfile profile={folderPageUser} />)}
        {(location.pathname !== '/shared' && location.pathname !== '/folder') && (sharedPageUser.email === '' ? <a href="./signin.html" className="login--btn btn">로그인</a> : <UserProfile profile={sharedPageUser} />)}
      </div>
    </header>
  )
};

export default Nav;
