import React, { useState } from "react";
import Image from "next/image";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import * as S from "./styled";

interface InputFieldProps {
  labelName: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  errorMessage?: string;
  validationRules: RegisterOptions;
}
function InputField({ labelName, label, type, placeholder, validationRules }: InputFieldProps) {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const triggerValidationOnBlur = async () => {
    await trigger(labelName);
  };

  const preventMouseEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const errorMessage = errors[labelName]?.message;
  const errorText = typeof errorMessage === "string" ? errorMessage : "";
  const eyeImage = inputType === "password" ? "/icons/eye-off.svg" : "/icons/eye-on.svg";

  return (
    <S.SignInputBox>
      <S.SignInputLabel htmlFor={labelName}>{label}</S.SignInputLabel>
      <S.InputWrapper $isError={!!errorText}>
        <Controller
          name={labelName}
          control={control}
          rules={validationRules}
          defaultValue=""
          render={({ field }) => {
            return (
              <input
                type={inputType}
                placeholder={placeholder}
                {...field}
                autoComplete="on"
                onBlur={async () => {
                  field.onBlur();
                  await triggerValidationOnBlur();
                }}
              />
            );
          }}
        />

        {type === "password" && (
          <S.EyeButton type="button" onMouseDown={preventMouseEvent} onClick={togglePasswordVisibility}>
            <Image src={eyeImage} alt="eye-icon" width={24} height={24} />
          </S.EyeButton>
        )}
      </S.InputWrapper>
      {errorText && <S.ErrorMessage>{errorText}</S.ErrorMessage>}
    </S.SignInputBox>
  );
}

export default InputField;
