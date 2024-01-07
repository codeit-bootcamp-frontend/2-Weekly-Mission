import "./SignInPage.css";
import { Link } from "react-router-dom";
import { EmailInput, PasswordInput } from "ui/Input";

export const SignInPage = () => {
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
          onSubmit="checkAccount()"
        >
          <div className="sign-inputs">
            <p>Input component하는 중</p>
            <EmailInput />
            <PasswordInput />
            {/* <div className="sign-input-box">
              <label className="sign-input-label" htmlFor="emailInput">
                이메일
              </label>
              <input className="sign-input" id="emailInput" type="email" />
              <p className="error-message" id="noEmail">
                이메일을 입력해주세요.
              </p>
              <p className="error-message" id="wrongEmail">
                올바른 이메일 주소가 아닙니다.
              </p>
              <p className="error-message" id="checkEmail">
                이메일을 확인해주세요.
              </p>
            </div>
            <div className="sign-input-box sign-password">
              <label className="sign-input-label" htmlFor="passwordInput">
                비밀번호
              </label>
              <input
                className="sign-input"
                id="passwordInput"
                type="password"
              />
              <button className="eye-button" type="button">
                <img src="./images/eye-off.svg" id="eye-off" alt="eye-off" />
              </button>
              <p className="error-message" id="noPassword">
                비밀번호를 입력해주세요.
              </p>
              <p className="error-message" id="checkPassword">
                비밀번호를 확인해주세요.
              </p>
            </div> */}
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
