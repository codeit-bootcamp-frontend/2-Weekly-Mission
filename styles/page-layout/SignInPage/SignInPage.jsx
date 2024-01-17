import "./SignInPage.css";
import { Link } from "react-router-dom";
import { EmailInput, PasswordInput } from "ui/Input";

export const SignInPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 기본 동작 방지

    // 여기에서 제출된 데이터를 콘솔에 출력
    const formData = new FormData(e.target);
    console.log("Submitted Data:", Object.fromEntries(formData));
  };

  return (
    <div className="signIn">
      <header>
        <Link className="logo-link" to="../">
          <img
            className="header-logo"
            src="./images/logo.svg"
            alt="홈으로 연결된 Linkbrary 로고"
          />
        </Link>
        <p className="header-message">
          회원이 아니신가요?
          <Link className="header-link" to="/signup">
            회원 가입하기
          </Link>
        </p>
      </header>
      <div className="sign-box">
        <form
          className="sign-form"
          method="post"
          action="#"
          onSubmit={handleSubmit}
        >
          <div className="sign-inputs">
            <EmailInput />
            <PasswordInput />
          </div>
          <button className="cta" type="submit" id="loginButton">
            로그인
          </button>
        </form>
        <div className="sns-box">
          <span className="sns-text">소셜 로그인</span>
          <div className="sns-links">
            <Link className="sns-link google-link" to="https://www.google.com/">
              <img src="./images/google.png" alt="Google Link" />
            </Link>
            <Link
              className="sns-link kakao-link"
              to="https://www.kakaocorp.com/page/"
            >
              <img src="./images/kakao.svg" alt="KaKao Link" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
