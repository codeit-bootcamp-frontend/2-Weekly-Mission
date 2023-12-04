import LOGO_IMAGE from "../../images/linkbrary.svg";
import "./NavigationBar.css";

const ROUTE = {
  랜딩: "/",
  로그인: "/signin",
  개인정보처리방침: "/privacy",
  FAQ: "/faq",
};

export const NavigationBar = ({ userInfo }) => {
  const { data } = userInfo;
  // const { email, image_source } = data[0];
  // 위 코드를 쓰면 계속 에러가 납니다. 부모한테 데이터를 아직 못받았는데 [0]번 인덱스를 구하려니 에러가 나는 것 같은데 어떻게 처리하면 좋을까요?
  // 에러문구: Cannot read properties of undefined (reading '0')

  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-items">
        <a href={ROUTE.랜딩}>
          <img
            className="NavigationBar-logo"
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
        </a>
        {data ? (
          <div className="Profile">
            <img
              className="Profile-image"
              src={data[0].image_source}
              alt="프로필 이미지"
            />
            <span className="Profile-email">{data[0].email}</span>
          </div>
        ) : (
          <button class="NavigationBar-signin">로그인</button>
        )}
      </div>
    </nav>
  );

  return;
};
