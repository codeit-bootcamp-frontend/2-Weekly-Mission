import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

interface AuthInputProps {
  label: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  onValid?: () => boolean;
  errorMessage?: string;
}
function AuthInput({ label, type, placeholder, onValid, errorMessage }: AuthInputProps) {
  const [inputType, setInputType] = useState(type);
  const [isError, setIsError] = useState(false);

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleBlur = () => {
    if (onValid) {
      const error = onValid();
      setIsError(error);
    }
  };

  return (
    <SignInputBox $isError={isError}>
      <SignInputLabel>{label}</SignInputLabel>
      <SignInput
        type={inputType}
        className="sign-input"
        autoComplete="username"
        placeholder={placeholder}
        onBlur={handleBlur}
      />
      {type === "password" && (
        <EyeButton onClick={togglePasswordVisibility}>
          <Image
            src={inputType === "password" ? "/icons/eye-off.svg" : "/icons/eye-on.svg"}
            alt="eye-icon"
            width={24}
            height={24}
          />
        </EyeButton>
      )}
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </SignInputBox>
  );
}

export default AuthInput;

const SignInputBox = styled.div<{ $isError: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
  position: relative;

  input {
    padding: 1.8rem 1.5rem;
    border-radius: 0.8rem;
    border: 0.1rem solid ${({ $isError, theme }) => ($isError ? theme.red : theme.gray300)};
    font-size: 1.6rem;
    line-height: 150%;

    &:focus {
      border-color: ${({ $isError, theme }) => ($isError ? theme.red : theme.primary)};
    }
  }
`;

const SignInputLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
`;

const SignInput = styled.input``;

const EyeButton = styled.button`
  position: absolute;
  top: 5.1rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  margin-top: -0.4rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.red};
  display: inline-block;
`;
