import logo from '../assets/logo.svg'
import '../styles/Nav.css'

const Nav = () => {
  return(
    <header className="landing--header">
      <div className="header-bar">
        <a href="/" className="landing--logo">
          <img src={logo} alt="logo"/>
        </a>
        <a href="./signin.html" className="login--btn btn">로그인</a>
      </div>
    </header>
  )
};

export default Nav;
