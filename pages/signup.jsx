import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
import JoinTitle from "../components/JoinTitle/JoinTitle";
import { Button } from "../components/Button/Button";
import ShareBox from "../components/ShareBox/shareBox";
import styles from "../styles/signin.module.css";
import { registerUser } from "./api/auth/signup-api";
import { AvailableEmail } from "./api/auth/signup-api";

function Signup() {
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [passwordConfirmInputType, setPasswordConfirmInputType] =
    useState("password");
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regPassword = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onBlur" });
  const watchEmail = watch("email", "");
  const router = useRouter();
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const togglePasswordConfirmVisibility = (e) => {
    e.preventDefault();
    setPasswordConfirmInputType((prev) =>
      prev === "password" ? "text" : "password"
    );
  };

  const queryClient = new QueryClient();

  // const handleRegister = useMutation({
  //   mutationFn: (formData) => registerUser(formData.email, formData.password),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["post"] });
  //     console.log("회원가입이 되었습니다.");
  //   },
  // });
  const handleRegister = useMutation({
    mutationFn: (formData) => registerUser(formData.email, formData.password),
    onSuccess: () => {
      console.log("회원가입이 되었습니다.");
      router.push("/signin");
    },
    onError: (error) => {
      console.error("handleRegister 뮤테이션에서 오류 발생:", error);
    },
  });
  const handleEmail = useMutation({
    mutationFn: (formData) => AvailableEmail(formData.email),
    onSuccess: (data) => {
      if (data.isAvailable) {
        // handleRegister 호출 시에는 이미 onSubmit 함수에서 formData가 전달되므로 별도로 전달할 필요가 없음
        handleRegister.mutate();
      } else {
        console.log("이메일 이미 사용 중");
      }
    },
    onError: (error) => {
      console.error("handleEmail 뮤테이션에서 오류 발생:", error);
    },
  });
  const onSubmit = (formData) => {
    // 비밀번호 확인 로직 추가
    console.log("handleSubmit 호출됨", formData);
    if (formData.password !== formData.passwordConfirm) {
      console.log("비밀번호가 일치하지 않습니다.");
      return;
    }

    handleEmail.mutate(formData);
    handleRegister.mutate(formData);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className={styles["form-all"]}
      >
        <JoinTitle />
        <div className={styles["form-inputs"]}>
          <Input
            label="이메일"
            type="email"
            error={errors.email?.message}
            placeholder="이메일을 입력해 주세요."
            registerConfig={{
              ...register("email", {
                required: "이메일을 입력해 주세요.",
                pattern: {
                  value: regEmail,
                  message: "올바른 이메일 주소가 아닙니다.",
                },
              }),
            }}
          />
          <Input
            label="비밀번호"
            type={passwordInputType}
            error={errors.password?.message}
            placeholder="비밀번호를 입력해 주세요."
            onChangeType={togglePasswordVisibility}
            registerConfig={{
              ...register("password", {
                required: "비밀번호를 입력해 주세요.",
                pattern: {
                  value: regPassword,
                  message: "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.",
                },
              }),
            }}
          />

          <Input
            label="비밀번호 확인"
            type={passwordConfirmInputType}
            error={errors.passwordConfirm?.message}
            placeholder="비밀번호를 입력해 주세요."
            onChangeType={togglePasswordConfirmVisibility}
            registerConfig={{
              ...register("passwordConfirm", {
                required: "비밀번호를 입력해 주세요.",
                pattern: {
                  value: regPassword,
                  message: "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.",
                },
              }),
            }}
          />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          회원가입
        </Button>
        <ShareBox />
      </form>
    </QueryClientProvider>
  );
}

export default Signup;
