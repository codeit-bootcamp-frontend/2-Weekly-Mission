import logoImg from "../images/logo.svg";

function NavBar() {
  return (
    <nav>
      <img src={logoImg} alt="logo" />
      <span>Codeit@codeit.com</span>
    </nav>
  );
}

export default NavBar;
