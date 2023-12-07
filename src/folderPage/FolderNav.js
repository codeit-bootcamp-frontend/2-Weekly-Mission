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

// 그냥 객체 형태로 오니 디스트럭션 x 바로 넣자.
//   {
//     "id": 1,
//     "name": "코드잇",
//     "email": "codeit@codeit.com",
//     "profileImageSource": "https://codeit-front.s3.ap-northeast-2.amazonaws.com/images/default_profile.png"
// }

// 얘는 Api 함수 떼온거 필요할때 쓰자.
// getFolderPageUsers
export default FolderNav;
