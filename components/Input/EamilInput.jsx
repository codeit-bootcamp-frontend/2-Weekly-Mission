import { useState } from "react";
import styles from "./EmailInput.module.css";

function EmailInput() {
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    if (email.trim() === "") {
      setError("값을 입력해 주세요.");
    } else {
      const isValidEmail = /\S+@\S+\.\S+/.test(email);
      setError(isValidEmail ? null : "올바른 이메일 형식이 아닙니다.");
    }
  };

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    validateEmail(inputValue);
  };

  const handleBlur = (e) => {
    const inputValue = e.currentTarget.value;
    validateEmail(inputValue);
  };

  return (
    <div>
      <label htmlFor="email" className={styles["input-label"]}>
        이메일
      </label>
      <input
        className={styles["input-hover"]}
        type="text"
        placeholder="내용을 입력해 주세요"
        onChange={handleChange}
        onBlur={handleBlur}
        style={{
          border: error ? "1px solid red" : "1px solid #ccd5e3",
          outline: "none",
        }}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

export default EmailInput;
