import React, { useState } from "react";
import Image from "next/image";
import styles from "./AuthInput.module.css";

interface AuthInputProps {
  label: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  onValid?: (value: string) => boolean;
  errorMessage?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function AuthInput({ label, type, placeholder, onValid, errorMessage, ...rest }: AuthInputProps) {
  const [inputType, setInputType] = useState(type);
  const [isError, setIsError] = useState<boolean>(false);

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputType(inputType === "password" ? "text" : "password");
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onValid) {
      const inputValue = e.target.value;
      let error = false;

      if (type === "email") {
        error = !onValid(inputValue);
      } else if (type === "password") {
        error = inputValue === "";
      }

      setIsError(error);
    }
  };

  return (
    <div className={`${styles.signInputBox}`}>
      <label className={styles.signInputLabel}>{label}</label>
      <input
        className={`${styles.input} ${isError ? styles.isError : ""}`}
        type={inputType}
        autoComplete="username"
        placeholder={placeholder}
        onBlur={handleBlur}
      />
      {type === "password" && (
        <button className={styles.eyeButton} onClick={togglePasswordVisibility} type="button">
          <Image
            src={inputType === "password" ? "/images/auth/eye-off.svg" : "/images/auth/eye-on.svg"}
            alt="eye-icon"
            width={16}
            height={16}
          />
        </button>
      )}
      {isError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}

export default AuthInput;
