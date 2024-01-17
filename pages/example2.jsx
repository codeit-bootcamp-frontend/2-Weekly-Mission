import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/example2.module.css";
import LoginTitle from "../components/LoginTitle/LoginTitle";
import ShareBox from "../components/ShareBox/shareBox";
import signin from "./api/sigin-api";

function Example2() {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    handleSignin(userData);
  };
  const emailVal = watch("email");
  const passwordVal = watch("password");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  //비밀번호 눈 버튼
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const router = useRouter();
  const hasError = !!errorMessage;
  const hasEmailError = !!emailError;

  const handleBlurSignin = (e) => {
    console.log("asd");
    const isValidEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };

    let newErrorMessage = errorMessage; // 이전 오류 메시지를 유지합니다.
    let emailErrorMessage = emailError; // 이전 이메일 오류 메시지를 유지합니다.

    if (e.target.name === "email") {
      if (!emailVal) {
        emailErrorMessage = "이메일을 입력해 주세요.";
      } else if (!isValidEmail(emailVal)) {
        emailErrorMessage = "올바른 이메일 주소가 아닙니다.";
      } else {
        emailErrorMessage = ""; // 입력이 유효한 경우 이메일 오류 메시지를 초기화합니다.
      }
    } else if (e.target.name === "password") {
      if (!passwordVal) {
        newErrorMessage = "비밀번호를 입력해 주세요";
      } else if (
        passwordVal.length < 8 ||
        !/\d/.test(passwordVal) ||
        !/[a-zA-Z]/.test(passwordVal)
      ) {
        newErrorMessage = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
      } else {
        newErrorMessage = ""; // 입력이 비어 있지 않은 경우 오류 메시지를 초기화합니다.
      }
    }
    setEmailError(emailErrorMessage);
    setErrorMessage(newErrorMessage);
    console.log(errorMessage);
  };

  const handleSignin = async (userData) => {
    try {
      const response = await signin(userData);
      if (response) {
        localStorage.setItem("sign", response.data.data.accessToken);
        router.push("/folder");
        console.log("POST 요청이 성공했습니다.");
      }
    } catch (error) {
      console.error("로그인 실패", error);
      setErrorMessage("아이디 혹은 비밀번호가 잘못되었습니다.");
      setEmailError("아이디 혹은 비밀번호가 잘못되었습니다.");
    }
  };

  useEffect(() => {
    const LocalStorage = localStorage.getItem("sign");
    if (LocalStorage !== null) {
      router.push("/folder");
    }
  }, []);

  return (
    <>
      <form className={styles["form-all"]} onSubmit={handleSubmit(onSubmit)}>
        <LoginTitle />
        <div className={styles["form-inputs"]}>
          <label htmlFor="email" className={styles["input-label"]}>
            이메일
          </label>
          <Input
            {...register("email")}
            placeholder="이메일을 입력해 주세요"
            type="text"
            onBlur={handleBlurSignin}
          />
          {hasEmailError ? (
            <small className={styles.error_message}>{emailError}</small>
          ) : null}

          <label htmlFor="password" className={styles["input-label"]}>
            비밀번호
          </label>
          <Input
            {...register("password")}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="비밀번호를 입력해 주세요"
            onBlur={handleBlurSignin}
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
          {hasError ? (
            <small className={styles.error_message}>{errorMessage}</small>
          ) : null}
          <div>
            <input
              className={styles["form-loginbtn"]}
              type="submit"
              value="로그인"
            />
          </div>
        </div>
        <ShareBox />
      </form>
    </>
  );
}
export default Example2;
