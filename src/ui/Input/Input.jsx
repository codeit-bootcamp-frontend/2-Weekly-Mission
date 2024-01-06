import styles from "./Input.module.css";

export const Input = ({ label, type }) => {
  if (type === "password") {
  }

  return (
    <>
      <div className={`${styles.input}`}>
        <label className={`${styles.label}`} htmlFor="passwordInput">
          {label}
        </label>
        <input
          className={`${styles.signInput}`}
          id="passwordInput"
          type="text"
        />
        {type === "password" ?? (
          <button className={`${styles.eyeButton}`} type="button">
            <img src="./images/eye-off.svg" id="eye-off" alt="eye-off" />
          </button>
        )}
        <p className={`${styles.errorMessage}`} id="noValue">
          {label}을 입력해주세요.
        </p>
        <p className={`${styles.errorMessage}`} id="checkValue">
          {label}를 확인해주세요.
        </p>
        <p className={`${styles.errorMessage}`} id="wrongEmail">
          올바른 이메일이 아닙니다.
        </p>
      </div>
    </>
  );
};
