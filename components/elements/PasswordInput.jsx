import { useState } from "react";
import Image from "next/image";
import styles from "./Input.module.css";

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState(false);

  const handleError = (e) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <div className={styles.GapWrapper}>
          <label for="password" className={styles.Label}>
            비밀번호
          </label>
          <div className={styles.Wrapper}>
            <input
              className={styles.TextInput}
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              value={password}
              onBlur={handleError}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              style={
                error
                  ? { border: "0.1rem solid #FF5B56", outline: "none" }
                  : { border: "0.1rem solid #CCD5E3" }
              }
            />
            <div className={styles.ImgWrapper}>
              <div className={styles.ImgContainer}>
                {isPasswordVisible ? (
                  <Image
                    fill
                    src="/eye-off.svg"
                    alt="비밀번호 가리기"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <Image
                    fill
                    src="/eye-on.svg"
                    alt="비밀번호 보이기"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {error && (
          <p className={styles.ErrorMessage}>비밀번호를 입력해 주세요.</p>
        )}
      </div>
    </>
  );
}

export default PasswordInput;
