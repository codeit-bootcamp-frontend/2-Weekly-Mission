import "../styles/nav.css";
import logoImg from "../img/logo.jpg";

function FolderNav({ folderPageUsers }) {
  const [{ email, image_source }] = folderPageUsers;
  //email, profileImageSource 에러가 떠서 일단 삭제
  return (
    <>
      <nav>
        <div className="gnb">
          <a href="index.html">
            <img src={logoImg} alt="로고이미지" className="logo" />
          </a>
          <a className="cta cta-short" href="signin.html">
            <img src={image_source} alt="회원이미지" className="userImg" />
            <span className="userEmail">{email}</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default FolderNav;
