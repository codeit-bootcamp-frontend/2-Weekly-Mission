import '../styles/Header.css'
import avatarDefaultImg from '../images/avatar_default.png'
import Nav from './Nav.js'

function Header() { 
  return (
    <header className="header">
      <Nav />
      <div className='heading-content'>
        <a href="/folder" className="avatar avatar-direction-column">
          <div className='avatar-image'>
            <img src={avatarDefaultImg} alt="프로필 이미지" />
          </div>
          <span className='avatar-text'>@코드잇</span>
        </a>
        <h2 className='title'>⭐️ 즐겨찾기</h2>
      </div>
    </header>
  )
}

export default Header;