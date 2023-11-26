import logoLinkbrary from "./navimg/logo.svg";

function NavLogo() {
  const src = logoLinkbrary;
  const alt = "홈으로 연결된 Linkbrary 로고";
  return <img src={src} alt={alt} />;
}

export default NavLogo;
