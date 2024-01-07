import { useEffect, useState } from "react";
import styles from "./Input.module.css";

export const EmailInput = () => {
  const [focus, setFocus] = useState(true);
  const [valueError, setValueError] = useState(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // focus 유무 감지
  const handleFocusIn = () => {
    setFocus(true);
  };
  const handleFocusOut = (e) => {
    setFocus(false);
    console.log("Email value:", e.target.value);
  };

  // useEffect(() => {}, [focus]);

  return (
    <>
      <div className={`${styles.input}`}>
        <label className={`${styles.label}`} htmlFor="passwordInput">
          이메일
        </label>
        <input
          className={`${styles.signInput}`}
          id="emailInput"
          type="email"
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
        />

        {focus ? null : (
          <>
            <p className={`${styles.errorMessage}`} id="noValue">
              이메일을 입력해주세요.
            </p>
            <p className={`${styles.errorMessage}`} id="checkValue">
              이메일을 확인해주세요.
            </p>
            <p className={`${styles.errorMessage}`} id="wrongEmail">
              올바른 이메일이 아닙니다.
            </p>
          </>
        )}
      </div>
    </>
  );
};

export const PasswordInput = () => {
  const [eye, setEye] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [focus, setFocus] = useState(true);
  const [valueError, setValueError] = useState(null);

  // focus 유무 감지
  const handleFocusIn = () => {
    setFocus(true);
  };
  const handleFocusOut = (e) => {
    setFocus(false);
    console.log("Input value:", e.target.value);
  };

  // 눈 버튼 클릭으로 변환 (비밀번호만 해당)
  const handleEyeButton = () => {
    setEye(!eye);
    setInputType(inputType === "password" ? "text" : "password");
  };

  // useEffect(() => {}, [focus]);

  return (
    <>
      <div className={`${styles.input}`}>
        <label className={`${styles.label}`} htmlFor="passwordInput">
          비밀번호
        </label>
        <input
          className={`${styles.signInput}`}
          id="passwordInput"
          type={inputType}
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
        />
        <button
          className={`${styles.eyeButton}`}
          type="button"
          onClick={handleEyeButton}
        >
          {eye ? (
            <img src="./images/eye-on.svg" id="eye-on" alt="eye-on" />
          ) : (
            <img src="./images/eye-off.svg" id="eye-off" alt="eye-off" />
          )}
        </button>

        {focus ? null : (
          <>
            <p className={`${styles.errorMessage}`} id="noValue">
              비밀번호를 입력해주세요.
            </p>
            <p className={`${styles.errorMessage}`} id="checkValue">
              비밀번호를 확인해주세요.
            </p>
          </>
        )}
      </div>
    </>
  );
};
