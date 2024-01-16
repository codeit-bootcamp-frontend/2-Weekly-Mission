import { useState } from "react";
import styles from "./EmailInput.module.css";
import Input from "./Input";

function EmailInput({ onEmailChange, onEmailBlur }) {
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    if (email.trim() === "") {
      setError("이메일을 입력해 주세요.");
    } else {
      const isValidEmail = /\S+@\S+\.\S+/.test(email);
      setError(isValidEmail ? null : "올바른 이메일 형식이 아닙니다.");
    }
  };

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    validateEmail(inputValue);
    onEmailChange && onEmailChange(inputValue, error);
  };

  const handleBlur = (e) => {
    const inputValue = e.currentTarget.value;
    validateEmail(inputValue);
    onEmailBlur && onEmailBlur(inputValue, error);
  };

  return (
    <div>
      <label htmlFor="email" className={styles["input-label"]}>
        이메일:
      </label>

      <Input
        type="text"
        placeholder="이메일을 입력해 주세요"
        onChange={handleChange}
        onBlur={handleBlur}
        state={error ? "error" : null}
        required
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

export default EmailInput;
