import '../styles/Header.css'
import logoImg from '../images/logo.svg'
import userDefaultImg from '../images/user_default.png'
import avatarDefaultImg from '../images/avatar_default.png'

function Header() { 
  return (
    <header className="header">
      <nav className='nav'>
        <h1 className="logo">
          <a className="link-home" href="/">
            <img className="image-logo" src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
          </a>
        </h1>
        <div className="auth">
          <a href="/folder" className="avatar avatar-direction-row">
            <div className='avatar-image'>
              <img src={userDefaultImg} alt="프로필 이미지" />
            </div>
            <span className='avatar-text sm-hidden'>Codeit@codeit.com</span>
          </a>
          {/* <a href="/signin.html" className="button-primary signin">로그인</a> */}
        </div>
      </nav>
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