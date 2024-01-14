import React from "react";
import styled from "styled-components";
import { signUp } from "../../../../pages/api/AuthApi";
import {
  InputBox,
  PasswordToggleIcon,
  AlertMessage,
  InputLayout,
} from "../Auth";
import { useForm } from "react-hook-form";
import SignUpButton from "./SignUpButton";
import { isDuplicateEmail } from "../../../../pages/api/AuthApi";
import SnsSignUp from "./SnsSignUp";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      mode: "onBurl",
    },
  });

  const onSubmit = async () => {
    if (
      !errors.email?.message &&
      !errors.password?.message &&
      !errors.passwordConfirm?.message
    ) {
      await signUp(watch("email"), watch("password"));
    }
  };

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <EmailBox isError={!!errors.email}>
        <label>이메일</label>
        <input
          placeholder="이메일을 입력해 주세요."
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "유효한 이메일 주소를 입력해주세요.",
            },
            validate: {
              duplicateEmail: async (value) => await isDuplicateEmail(value),
            },
          })}
        />
        <Message>{errors.email?.message}</Message>
      </EmailBox>
      <PasswordLayout>
        <label>비밀번호</label>
        <PasswordBox isError={!!errors.password}>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.",
              },
            })}
          />
          <PasswordOn
            src={"/images/eye-off.png"}
            width={16}
            height={13.82}
            alt="비밀번호 비활성화"
          />
        </PasswordBox>
        <Message>{errors.password?.message}</Message>
      </PasswordLayout>
      <PasswordConfirmLayout>
        <label>비밀번호 확인</label>
        <PasswordConfirmBox isError={!!errors.passwordConfirm}>
          <input
            type="password"
            placeholder="비밀번호와 일치하는 값을 입력해 주세요."
            {...register("passwordConfirm", {
              required: "비밀번호와 일치하는 값을 입력해 주세요",
              validate: (value) =>
                watch("password") === value || "비밀번호가 일치하지 않습니다",
            })}
          />
          <PasswordOn
            src={"/images/eye-off.png"}
            width={16}
            height={13.82}
            alt="비밀번호 비활성화"
          />
        </PasswordConfirmBox>
        <Message>{errors.passwordConfirm?.message}</Message>
      </PasswordConfirmLayout>
      <SignUpButton />
      <SnsSignUp />
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

const PasswordLayout = styled(InputLayout)``;
const PasswordBox = styled(InputBox)``;
const PasswordConfirmLayout = styled(InputLayout)``;
const PasswordConfirmBox = styled(InputBox)``;
const PasswordOn = styled(PasswordToggleIcon)``;
const PasswordOff = styled(PasswordToggleIcon)``;
const Message = styled(AlertMessage)``;

export default Form;
