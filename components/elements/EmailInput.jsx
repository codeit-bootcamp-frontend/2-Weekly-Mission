import { useState } from "react";
import styles from "./Input.module.css";

function EmailInput() {
  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState(false);

  const handleError = (e) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <div className={styles.MarginWrapper}>
        <div className={styles.GapWrapper}>
          <label for="email" className={styles.Label}>
            이메일
          </label>
          <input
            className={styles.TextInput}
            type="text"
            id="email"
            value={emailValue}
            onBlur={handleError}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="이메일"
            style={
              error
                ? { border: "0.1rem solid #FF5B56", outline: "none" }
                : { border: "0.1rem solid #CCD5E3" }
            }
          />
        </div>
        {error && (
          <p className={styles.ErrorMessage}>이메일을 입력해 주세요.</p>
        )}
      </div>
    </>
  );
}

export default EmailInput;
