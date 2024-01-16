import "./NavSection.css";
import logo from "./images/logo.svg";
import { useEffect, useState } from "react";
import { GetSharedPageProfile, getUsers } from "../api";

// function isEmailExist(item) {
//   if (item.email) {
//     return (
//       <div className="eMail">
//         <a className="purpleBackground" src={myProfile} href="">
//           <img className="eMailIcon" src={myProfile} />
//         </a>
//         <p>{item.email}</p>
//       </div>
//     );
//   } else {
//     return (
//       <a className="cta cta-short" href="signin.html">
//         <span>로그인</span>
//       </a>
//     );
//   }
// }

function NavSection({ className, value }) {
  const [user, setUser] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchData = async () => {
    try {
      setIsloading(true);
      setIsError(null);

      let data;

      if (value === "folder") {
        ({ data } = await getUsers());
      } else if (value === "shared") {
        data = await GetSharedPageProfile();
      }

      setUser(data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const RenderProfile = () => {
    if (value === "folder") {
      return (
        <>
          <img
            className="profileImage"
            src={user[0]?.image_source}
            alt="프로필 이미지"
          />
          <span className="profileEmail">{user[0]?.email}</span>
        </>
      );
    }

    if (value === "shared") {
      return (
        <>
          <img
            className="profileImage"
            src={user?.profileImageSource}
            alt="프로필 이미지"
          />
          <span className="profileEmail">{user?.email}</span>
        </>
      );
    }
  };

  return isLoading ? (
    <div className="loading">로딩중입니다.</div>
  ) : (
    <nav className={className}>
      <div className="gnb">
        <a href="index.html">
          <img src={logo} className="logo" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {user ? (
          <div className="eMail">{RenderProfile()}</div>
        ) : (
          <a className="cta cta-short" href="signin.html">
            <p>로그인</p>
          </a>
        )}
      </div>
      {isError?.message && <span className="error">{isError.message}</span>}
    </nav>
  );
}

export default NavSection;
