import styles from "./SignUpInput.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  EYEOFF_IMAGE,
  EYEON_IMAGE,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  ERROR_MESSAGE,
} from "./constant";

const cx = classNames.bind(styles);

export const SignUpInput = ({
  placeholder,
  type,
  value,
  onChange,
  password,
  isUsable = true,
  whichError,
}) => {
  const initialType = type;
  const [inputType, setInputType] = useState(type);
  const [isFocused, setIsFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isUsable) {
      console.log("이거 실행되냐");
      setErrorMessage(ERROR_MESSAGE.emailAlreadyExist);
    }
  }, []);

  const isValidEmail = (input) => {
    return EMAIL_REGEX.test(input) ? true : false;
  };

  const isValidPassword = (input) => {
    return PASSWORD_REGEX.test(input) ? true : false;
  };

  const handleEmailError = (e) => {
    if (!e.target.value) {
      setErrorMessage(ERROR_MESSAGE.emailRequired);
    } else if (!isValidEmail(e.target.value)) {
      setErrorMessage(ERROR_MESSAGE.emailInvalid);
    } else {
      setErrorMessage("");
    }
  };

  const handlePasswordError = (e) => {
    if (!e.target.value) {
      setErrorMessage(ERROR_MESSAGE.passwordRequired);
    } else if (!isValidPassword(e.target.value)) {
      setErrorMessage(ERROR_MESSAGE.passwordInvalid);
    } else {
      setErrorMessage("");
    }
  };

  const handlePasswordConfirmError = (e) => {
    if (!e.target.value) {
      setErrorMessage(ERROR_MESSAGE.passwordRequired);
    } else if (e.target.value !== password) {
      setErrorMessage(ERROR_MESSAGE.confirmedPasswordNotMatch);
    } else {
      setErrorMessage("");
    }
  };

  const handlePasswordShown = (e) => {
    setIsVisible(!isVisible);
    isVisible ? setInputType("password") : setInputType("text");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (type == "email") handleEmailError(e);
    else if (type == "password") handlePasswordError(e);
    else if (type == "confirmedPassword") handlePasswordConfirmError(e);
  };

  useEffect(() => {
    if (!isUsable) {
      if (type == "email") setErrorMessage(ERROR_MESSAGE.emailAlreadyExist);
    }
  }, [isUsable]);

  useEffect(() => {
    if (whichError) {
      if (whichError.includes("already" && type == "email"))
        setErrorMessage(ERROR_MESSAGE.emailAlreadyExist);
    }
  }, [whichError]);

  return (
    <div>
      <div className={cx("container")}>
        <input
          className={cx("input", { focused: isFocused, error: errorMessage })}
          type={inputType}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={initialType}
          value={value}
          onChange={onChange}
        />
        {type.includes("password") &&
          (isVisible ? (
            <Image
              src={EYEON_IMAGE}
              width={16}
              height={16}
              alt="비밀번호 보이기 아이콘"
              className={cx("eye-icon")}
              onClick={handlePasswordShown}
            />
          ) : (
            <Image
              src={EYEOFF_IMAGE}
              width={16}
              height={16}
              alt="비밀번호 숨김 아이콘"
              className={cx("eye-icon")}
              onClick={handlePasswordShown}
            />
          ))}
      </div>
      <p
        className={cx({
          "error-message": errorMessage,
          hidden: errorMessage == false,
        })}
      >
        {errorMessage}
      </p>
    </div>
  );
};
