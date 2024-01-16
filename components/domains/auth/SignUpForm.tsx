import React, { useState } from "react";
import styles from "@/components/domains/auth/InputForm.module.css";
import { useForm } from "react-hook-form";
import AuthInput from "./commons/AuthInput";
import { CtaLong } from "@/components/commons/Cta";
import { checkDuplicateEmail, signUp } from "@/pages/api/auth";
import { SignForm } from "@/lib/utils/type";
import { regEmail, regPassword } from "@/lib/utils/regPatterns";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<SignForm>({ mode: "onBlur" });
  const [passwordInputType, setPasswordInputType] = useState<string>("password");
  const [passwordConfirmInputType, setPasswordConfirmInputType] = useState<string>("password");

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPasswordInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const togglePasswordConfirmVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPasswordConfirmInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const onSubmit = async () => {
    await signUp(watch("email"), watch("password"));
    await checkDuplicateEmail(watch("email"), setError);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!errors.email && !errors.password && !errors.passwordConfirm) {
        onSubmit();
      }
    }
  };

  return (
    <form className={styles.signContainer} onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        label="이메일"
        type="email"
        error={errors.email?.message}
        placeholder="이메일을 입력해 주세요."
        registerConfig={register("email", {
          required: "이메일을 입력해 주세요.",
          pattern: {
            value: regEmail,
            message: "올바른 이메일 주소가 아닙니다.",
          },
        })}
      />
      <AuthInput
        label="비밀번호"
        type={passwordInputType}
        error={errors.password?.message}
        placeholder="비밀번호를 입력해 주세요."
        onChangeType={togglePasswordVisibility}
        registerConfig={register("password", {
          required: "비밀번호를 입력해 주세요.",
          pattern: {
            value: regPassword,
            message: "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.",
          },
        })}
      />
      <AuthInput
        label="비밀번호 확인"
        type={passwordConfirmInputType}
        error={errors.passwordConfirm?.message}
        placeholder="비밀번호를 입력해 주세요."
        onKeyPress={handleOnKeyPress}
        onChangeType={togglePasswordConfirmVisibility}
        registerConfig={register("passwordConfirm", {
          required: "비밀번호를 입력해 주세요.",
          pattern: {
            value: regPassword,
            message: "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.",
          },
          validate: (value) => watch("password") === value || "비밀번호가 일치하지 않습니다.",
        })}
      />
      <CtaLong onClick={handleSubmit(onSubmit)} type="submit">
        회원가입
      </CtaLong>
    </form>
  );
}
