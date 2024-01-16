import { useState } from "react";
import { useForm } from "react-hook-form";
import { errorMessages, emailRegex, passwordRegex } from "../utils/regexp";
import { signIn } from "../lib/loginApi";
import Image from "next/image";
import styles from "../styles/Sign.module.css";
import LogoTitle from "../components/signPage/LogoTitle";
import SubmitButton from "../components/elements/SubmitButton";
import SnsLogin from "../components/elements/snsLogin";

function Signin() {
  const signin = true;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register, watch, setError, formState, handleSubmit } = useForm();

  const errors = formState.errors;
  const onSubmit = async () => {
    await signIn(watch("email"), watch("password"), setError);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <form className={styles.Container} onSubmit={handleSubmit(onSubmit)}>
        <LogoTitle signin={signin} />
        <div className={styles.GapWrapper}>
          <label htmlFor="email" className={styles.Label}>
            이메일
          </label>
          <input
            className={`${styles.TextInput} ${
              errors.email ? styles.error : ""
            }`}
            {...register("email", {
              required: errorMessages.emailEmpty,
              pattern: {
                value: emailRegex,
                message: errorMessages.emailValid,
              },
            })}
            placeholder="이메일을 입력해 주세요."
          />
          <span className={styles.ErrorMessage}>{errors?.email?.message}</span>
        </div>
        <div className={styles.GapWrapper}>
          <label htmlFor="password" className={styles.Label}>
            비밀번호
          </label>
          <div className={styles.Wrapper}>
            <input
              className={`${styles.TextInput} ${
                errors.password ? styles.error : ""
              }`}
              {...register("password", {
                required: errorMessages.passwordEmpty,
                pattern: {
                  value: passwordRegex,
                  message: errorMessages.passwordValid,
                },
              })}
              type={isPasswordVisible ? "text" : "password"}
              placeholder="비밀번호를 입력해 주세요."
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
          <span className={styles.ErrorMessage}>
            {errors?.password?.message}
          </span>
        </div>
        <div className={styles.subBtn}>
          <SubmitButton text={"로그인"} />
        </div>
        <SnsLogin />
      </form>
    </>
  );
}

export default Signin;
