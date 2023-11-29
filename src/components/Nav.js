import '../styles/Nav.css'
import logoImg from '../images/logo.svg'

function Nav({ userProfile }) { 
  const {email, profileImageSource} = userProfile

  return (
    <nav className="nav">
      <h1 className="logo">
        <a className="link-home" href="/">
          <img className="image-logo" src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
      </h1>
      <div className="auth">
        <a href="/folder" className="avatar avatar-direction-row">
          <div className="avatar-image">
            <img src={profileImageSource} alt="프로필 이미지" />
          </div>
          <span className="avatar-text sm-hidden">{email}</span>
        </a>
        {/* <a href="/signin.html" className="button-primary signin">로그인</a> */}
      </div>
    </nav>
  )
}

export default Nav
