import { useState } from "react";

import Image from "next/image";
import styles from "./PasswordInput.module.css";
import Input from "./Input";

function VerifyPasswordInput(value, onChange) {
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const VerifyhandleError = (e) => {
    if (e.currentTarget.value === "") {
      setError("비밀번호를 입력해주세요.");
    } else {
      setError(null);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles["input-container"]}>
        <label htmlFor="password" className={styles["input-label"]}>
          비밀번호 확인
        </label>
        <Input
          required
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          value={verifyPassword}
          onBlur={VerifyhandleError}
          state={error ? "error" : null}
          onChange={(e) => setVerifyPassword(e.target.value)}
          placeholder="비밀번호와 일치하는 값을 입력해 주세요."
        />
        <div className={styles["wrap-ImgContainer"]}>
          <div className={styles.ImgContainer}>
            {isPasswordVisible ? (
              <Image
                fill
                src="/eye-on.svg"
                alt="비밀번호 보이기"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <Image
                fill
                src="/eye-off.svg"
                alt="비밀번호 가리기"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </>
  );
}
export default VerifyPasswordInput;
