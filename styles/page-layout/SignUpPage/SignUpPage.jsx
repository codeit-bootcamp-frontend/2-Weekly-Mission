import { useState } from "react";
import "./SignUpPage.css";
import { Link } from "react-router-dom";
import { EmailInput, PasswordInput, PasswordCheckInput } from "ui/Input";

export const SignUpPage = () => {
  const [checkRequired, setCheckRequired] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const password = formData.get("password");
    const passwordCheck = formData.get("passwordCheck");

    if (password === passwordCheck) {
      setCheckRequired(false);
    } else {
      setCheckRequired(true);
    }
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
          이미 회원이신가요?
          <Link className="header-link" to="/signin">
            로그인하기
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
            <PasswordCheckInput check={checkRequired} />
          </div>
          <button className="cta" type="submit" id="loginButton">
            회원가입
          </button>
        </form>
        <div className="sns-box">
          <span className="sns-text">다른 방식으로 가입하기</span>
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
