import React from "react";
import styled from "styled-components";
import SignInButton from "./SignInButton";
import {
  InputBox,
  PasswordToggleIcon,
  AlertMessage,
  InputLayout
} from "../Auth";
import { signIn } from "../../../../pages/api/AuthApi";
import SnsSingIn from "./SnsSignIn";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: ""
    }
  });

  const onSubmit = async () => {
    if (!errors.email?.message && !errors.password?.message) {
      await signIn(
        watch("email"),
        watch("password"),
        (inputName, { message }) =>
          setError(inputName as "email" | "password", { message })
      );
    }
  };

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <EmailBox isError={!!errors?.email}>
        <label>이메일</label>
        <input
          placeholder="이메일을 입력해 주세요"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "올바른 이메일 주소가 아닙니다."
            }
          })}
        />
        <AlertMessage>{errors.email?.message}</AlertMessage>
      </EmailBox>
      <InputLayout>
        <label>비밀번호</label>
        <InputBox isError={!!errors.password}>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요."
              }
            })}
          />
          <PasswordToggleIcon
            src={"/images/eye-off.png"}
            width={16}
            height={13.82}
            alt="비밀번호 비활성화 아이콘"
          />
        </InputBox>
        <AlertMessage>{errors.password?.message}</AlertMessage>
      </InputLayout>
      <SignInButton />
      <SnsSingIn />
    </FormBox>
  );
};

interface IsError {
  isError?: boolean;
}

const FormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const EmailBox = styled.div<IsError>`
  & > label {
    font-size: 1.4rem;
    color: #000000;
    display: block;
    margin-bottom: 1.2rem;
  }

  & input {
    width: 100%;
    padding: 1.8rem 1.5rem;
    border-radius: 0.8rem;
    border: 1px solid var(--gray-lighter);
    border-color: ${(props) =>
      props.isError ? "var(--focus-alert)" : "var(--gray-lighter)"};
    padding-left: 1.5rem;
    padding-right: 4rem;
    outline: none;
  }
`;

export default Form;
