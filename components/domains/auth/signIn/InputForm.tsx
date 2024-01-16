import React, { useState } from "react";
import styles from "./InputForm.module.css";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { CtaLong } from "@/components/commons/Cta";
import { signIn } from "@/pages/api/auth";

interface ISigninForm {
  email: string;
  password: string;
  passwordConfirm?: string;
}

export default function InputForm() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<ISigninForm>({ mode: "onBlur" });
  const [inputType, setInputType] = useState<string>("password");

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const onLogin = async () => {
    await signIn(watch("email"), watch("password"), setError);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!errors.email && !errors.password) {
        onLogin();
      }
    }
  };

  return (
    <form className={styles.signContainer} onSubmit={handleSubmit(onLogin)}>
      <label className={styles.label} htmlFor="email">
        이메일
      </label>
      <input
        className={`${styles.input} ${errors.email ? styles.error : ""}`}
        type="email"
        placeholder="이메일을 입력해 주세요."
        {...register("email", {
          required: "이메일을 입력해 주세요.",
          pattern: {
            value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
            message: "올바른 이메일 주소가 아닙니다.",
          },
        })}
      />
      <p className={styles.errorMessage}>{errors.email?.message}</p>
      <label className={styles.label} htmlFor="password">
        비밀번호
      </label>
      <div className={styles.passwordInput}>
        <input
          className={`${styles.input} ${errors.password ? styles.error : ""}`}
          type={inputType}
          placeholder="비밀번호를 입력해 주세요."
          onKeyPress={handleOnKeyPress}
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.",
            },
          })}
        />
        <button className={styles.eyeButton} onClick={togglePasswordVisibility} type="button">
          <Image
            src={inputType === "password" ? "/images/auth/eye-off.svg" : "/images/auth/eye-on.svg"}
            alt="eye-icon"
            width={16}
            height={16}
          />
        </button>
      </div>
      <p className={styles.errorMessage}>{errors.password?.message}</p>
      <CtaLong onClick={handleSubmit(onLogin)} type="submit">
        로그인
      </CtaLong>
    </form>
  );
}
