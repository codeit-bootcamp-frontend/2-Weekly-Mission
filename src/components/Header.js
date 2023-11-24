import "./style.css";

function Header() {
  return (
    <header>
      <div class="header_inner">
        <a href="/">
          <h1>
            <img src="img/logo.png" alt="logo" />
          </h1>
        </a>

        <a href="/signin">로그인</a>
      </div>
    </header>
  );
}

export default Header;
