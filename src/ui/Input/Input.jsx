import { useState } from "react";
import styles from "./Input.module.css";

export const Input = ({ label, type }) => {
  const [eye, setEye] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handleEyeButton = () => {
    setEye(!eye);
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <>
      <div className={`${styles.input}`}>
        <label className={`${styles.label}`} htmlFor="passwordInput">
          {label}
        </label>
        <input
          className={`${styles.signInput}`}
          id="passwordInput"
          type={inputType}
        />
        {type === "password" ? (
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
        ) : null}
        <p className={`${styles.errorMessage}`} id="noValue">
          {label}을 입력해주세요.
        </p>
        <p className={`${styles.errorMessage}`} id="checkValue">
          {label}를 확인해주세요.
        </p>
        {type === "email" ? (
          <p className={`${styles.errorMessage}`} id="wrongEmail">
            올바른 이메일이 아닙니다.
          </p>
        ) : null}
      </div>
    </>
  );
};
