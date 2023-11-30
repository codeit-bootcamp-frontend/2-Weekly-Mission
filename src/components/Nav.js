import logo from '../assets/logo.svg';
import '../styles/Nav.css'
import { useUser } from '../hooks/useUser';

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
  const user = useUser(INITIAL_USER_VALUE);
  
  return(
    <header className="landing--header">
      <div className="header-bar">
        <a href="/" className="landing--logo">
          <img src={logo} alt="logo"/>
        </a>
        {user.email === '' ? <a href="./signin.html" className="login--btn btn">로그인</a> : <UserProfile profile={user}></UserProfile>}
      </div>
    </header>
  )
};

export default Nav;
