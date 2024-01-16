import React from "react";
import styles from "@/components/domains/auth/InputForm.module.css";
import Image from "next/image";

interface AuthInputProps {
  label: string;
  type: string;
  error: string | undefined;
  placeholder: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChangeType?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  registerConfig: any;
}
const AuthInput = ({ label, type, error, placeholder, onKeyPress, onChangeType, registerConfig }: AuthInputProps) => (
  <>
    <label className={styles.label} htmlFor={label}>
      {label}
    </label>
    <div className={styles.inputBox}>
      <input
        className={`${styles.input} ${error ? styles.error : ""}`}
        type={type}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        {...registerConfig}
      />
      {(type === "password" || type === "text") && (
        <button className={styles.eyeButton} onClick={onChangeType} type="button">
          <Image
            src={`/images/auth/eye-${type === "password" ? "off" : "on"}.svg`}
            alt="eye-icon"
            width={16}
            height={16}
          />
        </button>
      )}
    </div>
    {error && <p className={styles.errorMessage}>{error}</p>}
  </>
);

export default AuthInput;
