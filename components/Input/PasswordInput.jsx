import { useState } from "react";
import Image from "next/image";
import styles from "./PasswordInput.module.css";

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
      <div className={styles["input-container"]}>
        <label htmlFor="password" className={styles["input-label"]}>
          비밀번호
        </label>
        <input
          className={styles["input-hover"]}
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          onBlur={handleError}
          style={
            error
              ? { border: "1px solid red", outline: "none" }
              : { border: "1px solid #ccd5e3" }
          }
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
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
        {error && <p className={styles.errorMessage}>값을 입력해 주세요.</p>}
      </div>
    </>
  );
}

export default PasswordInput;
