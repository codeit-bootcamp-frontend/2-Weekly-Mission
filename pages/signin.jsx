import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { loginUser } from "./api/auth/signin-api";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import LoginTitle from "../components/LoginTitle/LoginTitle";
import { Button } from "../components/Button/Button";
import ShareBox from "../components/ShareBox/shareBox";
import styles from "../styles/signin.module.css";
import Input from "../components/Input/Input";

function Signin() {
  const [passwordInputType, setPasswordInputType] = useState("password");
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regPassword = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onBlur" });
  const watchEmail = watch("email", "");
  const watchPassword = watch("password", "");
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordInputType((prev) => (prev === "password" ? "text" : "password"));
  };
  const queryClient = new QueryClient();
  // useQuery 훅 사용
  const router = useRouter();

  // 로그인 성공 시 페이지 이동
  const onSuccess = () => {
    router.push("/folder"); // 성공 페이지 경로로 이동
  };
  const handleSignin = useMutation({
    mutationFn: (formData) => loginUser(formData.email, formData.password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] });
      console.log("로그인 되었습니다.");
      onSuccess();
    },
    onError: (error) => {
      console.error("로그인 오류:", error);
      // 오류에 따른 적절한 처리를 추가하세요.
    },
  });

  const onSubmit = (formData) => {
    handleSignin.mutate(formData);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className={styles["form-all"]}
      >
        <LoginTitle />
        <div className={styles["form-inputs"]}>
          <Input
            className={styles.inputs}
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
            className={styles.inputs}
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
        </div>
        <Button onClick={() => onSuccess} ype="submit" disabled={isSubmitting}>
          로그인
        </Button>
        <ShareBox />
      </form>
    </QueryClientProvider>
  );
}

export default Signin;
